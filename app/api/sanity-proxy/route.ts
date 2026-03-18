import { NextRequest, NextResponse } from "next/server";
import { client, urlFor } from "@/sanity/client";

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type");

  if (type === "blog-thumbnails") {
    const slugsParam = req.nextUrl.searchParams.get("slugs");
    if (!slugsParam) return NextResponse.json({});
    const slugs = slugsParam.split(",");

    const results = await client.fetch<
      { slug: string; thumbnail?: { asset?: { _ref: string } } }[]
    >(
      `*[_type == "blog" && slug.current in $slugs]{
        "slug": slug.current,
        thumbnail
      }`,
      { slugs },
    );

    const map: Record<string, string> = {};
    for (const r of results) {
      if (r.thumbnail) {
        map[r.slug] = urlFor(r.thumbnail).width(600).height(338).url();
      }
    }
    return NextResponse.json(map);
  }

  if (type === "casestudies") {
    const limit = parseInt(req.nextUrl.searchParams.get("limit") ?? "3", 10);

    const results = await client.fetch<
      {
        slug: string;
        title: string;
        description: string;
        category: string;
        thumbnail?: { asset?: { _ref: string } };
      }[]
    >(
      `*[_type == "casestudy" && defined(slug.current)]|order(publishedAt desc)[0...$limit]{
        "slug": slug.current,
        title,
        description,
        category,
        thumbnail
      }`,
      { limit },
    );

    const studies = results.map((r) => ({
      slug: r.slug,
      title: r.title,
      description: r.description,
      category: r.category,
      thumbnailUrl: r.thumbnail
        ? urlFor(r.thumbnail).width(400).height(225).url()
        : null,
    }));

    return NextResponse.json(studies);
  }

  return NextResponse.json({ error: "Unknown type" }, { status: 400 });
}
