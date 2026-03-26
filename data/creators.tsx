import React from "react";

export const dummyVideos = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
];

export const videosByCategory: Record<string, string[]> = {
  health: [
    "https://embed-ssl.wistia.com/deliveries/9cf1628d71674e17cfe0b20d3fbfac68.bin",
    "https://embed-ssl.wistia.com/deliveries/24ca2e670fddcf357480458d191c91d7.bin",
    "https://embed-ssl.wistia.com/deliveries/0074fb6e42aa8d019ee7f8be5700d6a9.bin",
    "https://embed-ssl.wistia.com/deliveries/32a131c08a86fc1b55389b75008aecec.bin",
    "https://embed-ssl.wistia.com/deliveries/d725b1ff20122f4a8195cb9475b12de5a4ee0a43.bin",
    "https://embed-ssl.wistia.com/deliveries/a1bc3c1b91c297be5a21b4b654b0ce7b.bin",
    "https://embed-ssl.wistia.com/deliveries/062707f23751f62e2ddc9dcf61de6f68.bin",
  ],
  // Ayo, Max, Angela, Madison, Serena, Renae, Carly
  social: [
    "https://embed-ssl.wistia.com/deliveries/5bea09047459deb9fd7f432f70b1d4af764d63d6.bin",
    "https://embed-ssl.wistia.com/deliveries/1cd6b153fdc737d30f171a0f1c599ca26ce87506.bin",
    "https://embed-ssl.wistia.com/deliveries/64d9751b2b39ba062ae0d46c7cce5c0c389ab26e.bin",
    "https://embed-ssl.wistia.com/deliveries/6c14963bb6dfde6bdea93d471db5d141f61f475d.bin",
    "https://embed-ssl.wistia.com/deliveries/33c28bdd782c63f211463ae74a46cb1660fe0b18.bin",
    "https://embed-ssl.wistia.com/deliveries/f3cf458fd81d2f278d0069e60b1f45a20c3eb676.bin",
    "https://embed-ssl.wistia.com/deliveries/a53fea947d008f58989e3c9d81e25a27d1e14eb4.bin",
  ],
  // Ray, Max, Abby, Vika, Dre, Marcela, Kat (Kat has no video — will cycle)
  cpg: [
    "https://embed-ssl.wistia.com/deliveries/d17a0b74fa66395f948cd0a6961c3f90760d2db1.bin",
    "https://embed-ssl.wistia.com/deliveries/e35d3aee91a15b280e0dc61a4da4b46fcca61f72.bin",
    "https://embed-ssl.wistia.com/deliveries/8ba906456d0e8c07cac4d844b0fb4b8e53e88d90.bin",
    "https://embed-ssl.wistia.com/deliveries/a2c4edc7880dcb59bf497eb5e74c09fef3788a50.bin",
    "https://embed-ssl.wistia.com/deliveries/3117b82506acec36eb1761e025b3c14011b151fc.bin",
    "https://embed-ssl.wistia.com/deliveries/447db535b5dd48c1682608bcf5b4018a48d114fc.bin",
  ],
  // Jess, Alina, Meg, Marissa, Trinity, Sara, Austin
  fashion: [
    "https://embed-ssl.wistia.com/deliveries/2fbba00f7b4a6e454d9b906e4feab3a58578d022.bin",
    "https://embed-ssl.wistia.com/deliveries/9d251315b70a35f5916d6f98f6d4232997f61ba8.bin",
    "https://embed-ssl.wistia.com/deliveries/9482fd1430020f5a57f98dbe5eb1e399a80cd4f1.bin",
    "https://embed-ssl.wistia.com/deliveries/1ff985b9f3c41a99e324390bb594567f282b0fd9.bin",
    "https://embed-ssl.wistia.com/deliveries/3aa409af903c2e18a2b15b6bc9d2ec9334555d07.bin",
    "https://embed-ssl.wistia.com/deliveries/63b50ba69b6ea2481c098455006d06a8225c2383.bin",
    "https://embed-ssl.wistia.com/deliveries/e5887cbed750da6d5b3f58a0c13ec0708dd9a764.bin",
  ],
  // Colin, Ayo, Mackenzie, Paige, Matt, Maxine
  tech: [
    "https://embed-ssl.wistia.com/deliveries/93e764cc4358f4f7ac6a591ce9a94719036f1fa1.bin",
    "https://embed-ssl.wistia.com/deliveries/c96acf775791d046527caa0fd27ce0272d94a782.bin",
    "https://embed-ssl.wistia.com/deliveries/80cc9c9a0a43ae323a66ec0cc124c0b51be3f568.bin",
    "https://embed-ssl.wistia.com/deliveries/5ee6e87cf4fc4ee78b946d592d60a7fbce01521e.bin",
    "https://embed-ssl.wistia.com/deliveries/aab57ddf37e1e2605fa77e58337e9c7baece5041.bin",
    "https://embed-ssl.wistia.com/deliveries/31e7fddef6a1de406487c1ecef14539a63a9af84.bin",
  ],
  // Cassandra, Monte, Justin, Emmy, Grace
  finance: [
    "https://embed-ssl.wistia.com/deliveries/5fdfe27941dd965a4f8c5f6fab7038bb863eefa8.bin",
    "https://embed-ssl.wistia.com/deliveries/ca4ad46e76966f491b345833398218437e4809a1.bin",
    "https://embed-ssl.wistia.com/deliveries/bb38de921ca9544936ab61c60fe9e53f2a2d4aa8.bin",
    "https://embed-ssl.wistia.com/deliveries/a68891436d1137560846cb445acbdf512507edfe.bin",
    "https://embed-ssl.wistia.com/deliveries/ddbcf47917f3c1cc283fcb3fe6a838584e9aaa86.bin",
  ],
  // Nina, Jenny, Frank, Jacob, Saumya, Gino
  entertainment: [
    "https://embed-ssl.wistia.com/deliveries/e41e0b3c778d1387317a13e127cb50ea745c1bd7.bin",
    "https://embed-ssl.wistia.com/deliveries/4551423cb07185a61dd4ec61ef144aabc06e4a64.bin",
    "https://embed-ssl.wistia.com/deliveries/ab747d5792f66348fd2b5f9e410f88449d22ef73.bin",
    "https://embed-ssl.wistia.com/deliveries/3b6032a88efa37bb7a3ff5ade61aed3da170ea0f.bin",
    "https://embed-ssl.wistia.com/deliveries/886c07a0a36a95b3b2e97f2e3f4b5388c5b0bed9.bin",
    "https://embed-ssl.wistia.com/deliveries/4c0b69b90a25204f04ace08245576c195e5da690.bin",
  ],
  // Jordynn, Isaac, Hannah, Trey, Kaiya, Mykaila, Eric
  gaming: [
    "https://embed-ssl.wistia.com/deliveries/5dc5ec46f1e6a6e23aa7537a407e6b36ced7f673.bin",
    "https://embed-ssl.wistia.com/deliveries/14d231d8984ce4693c20170ecdc57798e4f7b86e.bin",
    "https://embed-ssl.wistia.com/deliveries/48d3a0c4e1c43ed2344cb2e45c28002d8261687f.bin",
    "https://embed-ssl.wistia.com/deliveries/eeee78fec8dde2b906be33b9e322dc8458796d17.bin",
    "https://embed-ssl.wistia.com/deliveries/86f74639530aade997f0317c8fc171f42839e86f.bin",
    "https://embed-ssl.wistia.com/deliveries/d5f35100157477dcaf20c3c6d820c5b71300503c.bin",
    "https://embed-ssl.wistia.com/deliveries/9236a37d89366b50774fa0db82445bedf28fab87.bin",
  ],
  // Brianna, Ali, LourDrick, Emma, Joe, Caitlin, Gray
  education: [
    "https://embed-ssl.wistia.com/deliveries/4f91c1f5442305dd10e9dd301215e41f.bin",
    "https://embed-ssl.wistia.com/deliveries/d73bdaf7d3b35fc483fa49092b05fa12c4adf883.bin",
    "https://embed-ssl.wistia.com/deliveries/423fd867152b55997bf266042156a29d46e28c3b.bin",
    "https://embed-ssl.wistia.com/deliveries/055b54bbf015d142a58192bd1ca63a4e2711f6a0.bin",
    "https://embed-ssl.wistia.com/deliveries/74a92f8aa53b5220d0b21001a87db8bcc4ab0339.bin",
    "https://embed-ssl.wistia.com/deliveries/efdb84a97368d1222eb3844359f06c3cb762b387.bin",
    "https://embed-ssl.wistia.com/deliveries/f08050925fc785af03843808be6b9ed064daa1d5.bin",
  ],
  // Sarah, Vivi, Hayden, Quis, Gyasi, Maya
  photo: [
    "https://embed-ssl.wistia.com/deliveries/34f74124dcd795cadedb42dceb9b582766919255.bin",
    "https://embed-ssl.wistia.com/deliveries/9fdc8c08475de27e48252a4338673d0b2ebf705e.bin",
    "https://embed-ssl.wistia.com/deliveries/0aea2999f369ed5a65d18cc34fad402f.bin",
    "https://embed-ssl.wistia.com/deliveries/12b0c9301dfce8ff738a8931f7795e4b1dc84345.bin",
    "https://embed-ssl.wistia.com/deliveries/996ee9d88bf033073590e5593f9860c4071c510c.bin",
    "https://embed-ssl.wistia.com/deliveries/bf59a20299194d5f97e36045d8f8911d.bin",
  ],
  // Lydia, Nessa, Shelby, Alyssa, Victor, Tatsuya, Larine
  travel: [
    "https://embed-ssl.wistia.com/deliveries/96de35e1438f7722952fc20d2439372095715517.bin",
    "https://embed-ssl.wistia.com/deliveries/b9f5f2e93f92a8b51bad2a04740cde92c22607c3.bin",
    "https://embed-ssl.wistia.com/deliveries/9ebdcfda601bb11668d915fbb85b99f06792c727.bin",
    "https://embed-ssl.wistia.com/deliveries/9fba82f80ce5be8a242307cb32e1609d859a4cde.bin",
    "https://embed-ssl.wistia.com/deliveries/e565d0b126cfb8d7b3bd4f9c1f523000364a8f31.bin",
    "https://embed-ssl.wistia.com/deliveries/ad46d6a624c3a9b29e4e86a1ed51e32e.bin",
    "https://embed-ssl.wistia.com/deliveries/5bb3e0fa0b23286b0de58a9e681945ee7dade3a7.bin",
  ],
};

export const categories = [
  { id: "health", label: "Health & Wellness" },
  { id: "social", label: "Social Networks & Relationship" },
  { id: "cpg", label: "CPG" },
  { id: "fashion", label: "Apparel & Fashion" },
  { id: "tech", label: "Tech & AI" },
  { id: "finance", label: "Finance" },
  { id: "entertainment", label: "Entertainment & Music" },
  { id: "gaming", label: "Gaming" },
  { id: "education", label: "Education & Language" },
  { id: "photo", label: "Photo & Video Editing" },
  { id: "travel", label: "Travel" },
];

export const namesByCat: Record<string, string[]> = {
  health: ["Shelly", "Noah", "Calvin", "Abby", "Makena", "Bella", "Elle"],
  social: ["Ayo", "Max", "Angela", "Madison", "Serena", "Renae", "Carly"],
  cpg: ["Ray", "Max", "Abby", "Vika", "Dre", "Marcela"],
  fashion: ["Jess", "Alina", "Meg", "Marissa", "Trinity", "Sara", "Austin"],
  tech: ["Colin", "Ayo", "Mackenzie", "Paige", "Matt", "Maxine"],
  finance: ["Cassandra", "Monte", "Justin", "Emmy", "Grace"],
  entertainment: ["Nina", "Jenny", "Frank", "Jacob", "Saumya", "Gino"],
  gaming: ["Jordynn", "Isaac", "Hannah", "Trey", "Kaiya", "Mykaila", "Eric"],
  education: ["Brianna", "Ali", "LourDrick", "Emma", "Joe", "Caitlin", "Gray"],
  photo: ["Sarah", "Vivi", "Hayden", "Quis", "Gyasi", "Maya"],
  travel: ["Lydia", "Nessa", "Shelby", "Alyssa", "Victor", "Tatsuya", "Larine"],
};

export const ratingsByCat: Record<string, string[]> = {
  health: ["5.0", "4.5", "5.0", "4.5", "5.0", "4.0", "4.5"],
  social: ["4.5", "5.0", "4.0", "5.0", "4.5", "5.0", "4.5"],
  cpg: ["5.0", "4.5", "4.5", "5.0", "4.0", "5.0"],
  fashion: ["4.5", "5.0", "4.0", "4.5", "5.0", "4.5", "5.0"],
  tech: ["5.0", "4.5", "5.0", "4.0", "4.5", "4.5"],
  finance: ["4.0", "4.5", "5.0", "4.5", "5.0"],
  entertainment: ["5.0", "4.5", "4.5", "5.0", "4.0", "5.0"],
  gaming: ["4.5", "5.0", "4.5", "4.0", "5.0", "4.5", "5.0"],
  education: ["5.0", "4.0", "4.5", "5.0", "4.5", "5.0", "4.5"],
  photo: ["4.5", "5.0", "4.5", "5.0", "4.0", "4.5"],
  travel: ["5.0", "4.5", "4.0", "4.5", "5.0", "4.5", "5.0"],
};

export const countriesByCat: Record<string, string[]> = {
  health: [
    "United States",
    "United States",
    "United States",
    "Canada",
    "United States",
    "United States",
    "United States",
  ],
  social: [
    "United States",
    "United States",
    "United States",
    "United States",
    "United Kingdom",
    "Canada",
    "United States",
  ],
  cpg: [
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
  ],
  fashion: [
    "United Kingdom",
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
    "Australia",
  ],
  tech: [
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
  ],
  finance: [
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
  ],
  entertainment: [
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
  ],
  gaming: [
    "Canada",
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
  ],
  education: [
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
    "United States",
  ],
  photo: [
    "United States",
    "United Kingdom",
    "United States",
    "United States",
    "United States",
    "United States",
  ],
  travel: [
    "United States",
    "United States",
    "United States",
    "United States",
    "United Kingdom",
    "United States",
    "United States",
  ],
};

export const gradients = [
  "from-rose-300 via-pink-200 to-orange-200",
  "from-sky-300 via-blue-200 to-indigo-300",
  "from-emerald-300 via-teal-200 to-cyan-200",
  "from-amber-300 via-yellow-200 to-lime-200",
  "from-violet-300 via-purple-200 to-fuchsia-200",
  "from-pink-300 via-rose-200 to-red-200",
  "from-cyan-300 via-sky-200 to-blue-200",
];

export const industryFilters = [
  { label: "Health & Wellness", categoryId: "health" },
  { label: "Social Networks & Relationship", categoryId: "social" },
  { label: "CPG", categoryId: "cpg" },
  { label: "Apparel & Fashion", categoryId: "fashion" },
  { label: "Tech & AI", categoryId: "tech" },
  { label: "Finance", categoryId: "finance" },
  { label: "Entertainment & Music", categoryId: "entertainment" },
  { label: "Gaming", categoryId: "gaming" },
  { label: "Education & Language", categoryId: "education" },
  { label: "Photo & Video Editing", categoryId: "photo" },
  { label: "Travel", categoryId: "travel" },
];

function USFlag() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#us)">
        <path
          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
          fill="#F0F0F0"
        />
        <path
          d="M7.652 8.5H16C16 7.778 15.904 7.078 15.724 6.413H7.652V8.5Z"
          fill="#D80027"
        />
        <path
          d="M7.652 4.326H14.826C14.336 3.527 13.71 2.82 12.98 2.239H7.652V4.326Z"
          fill="#D80027"
        />
        <path
          d="M8 16.5C9.883 16.5 11.613 15.849 12.98 14.761H3.02C4.387 15.849 6.117 16.5 8 16.5Z"
          fill="#D80027"
        />
        <path
          d="M1.174 12.673H14.826C15.219 12.032 15.524 11.331 15.724 10.586H0.275C0.476 11.331 0.781 12.032 1.174 12.673Z"
          fill="#D80027"
        />
        <path
          d="M3.706 1.749H4.435L3.757 2.242L4.016 3.039L3.338 2.546L2.66 3.039L2.883 2.35C2.286 2.848 1.763 3.431 1.332 4.08H1.565L1.134 4.393C1.066 4.506 1.002 4.62 0.94 4.735L1.146 5.37L0.762 5.09C0.666 5.293 0.579 5.5 0.5 5.711L0.727 6.41H1.565L0.887 6.903L1.146 7.7L0.468 7.207L0.062 7.502C0.021 7.829 0 8.162 0 8.5H8C8 4.082 8 3.561 8 0.5C6.42 0.5 4.946 0.958 3.706 1.749ZM4.016 7.7L3.338 7.207L2.66 7.7L2.919 6.903L2.24 6.41H3.079L3.338 5.613L3.597 6.41H4.435L3.757 6.903L4.016 7.7ZM3.757 4.572L4.016 5.37L3.338 4.877L2.66 5.37L2.919 4.572L2.24 4.08H3.079L3.338 3.283L3.597 4.08H4.435L3.757 4.572ZM6.885 7.7L6.207 7.207L5.529 7.7L5.788 6.903L5.11 6.41H5.948L6.207 5.613L6.466 6.41H7.304L6.626 6.903L6.885 7.7ZM6.626 4.572L6.885 5.37L6.207 4.877L5.529 5.37L5.788 4.572L5.11 4.08H5.948L6.207 3.283L6.466 4.08H7.304L6.626 4.572ZM6.626 2.242L6.885 3.039L6.207 2.546L5.529 3.039L5.788 2.242L5.11 1.749H5.948L6.207 0.952L6.466 1.749H7.304L6.626 2.242Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="us">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function CAFlag() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#ca)">
        <path
          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
          fill="#F0F0F0"
        />
        <path
          d="M16 8.5C16 5.329 14.155 2.589 11.479 1.295V15.707C14.155 14.413 16 11.672 16 8.5Z"
          fill="#D80027"
        />
        <path
          d="M0 8.5C0 11.672 1.846 14.413 4.522 15.707V1.294C1.846 2.588 0 5.329 0 8.5Z"
          fill="#D80027"
        />
        <path
          d="M9.392 9.544L10.783 8.848L10.087 8.5V7.805L8.696 8.5L9.392 7.109H8.696L8 6.066L7.305 7.109H6.609L7.305 8.5L5.913 7.805V8.5L5.218 8.848L6.609 9.544L6.261 10.24H7.653V11.283H8.348V10.24H9.74L9.392 9.544Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="ca">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function GBFlag() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#gb)">
        <path
          d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
          fill="#F0F0F0"
        />
        <path
          d="M1.654 3.629C1.025 4.446 0.552 5.389 0.276 6.412H4.437L1.654 3.629Z"
          fill="#0052B4"
        />
        <path
          d="M15.725 6.412C15.449 5.389 14.975 4.446 14.347 3.629L11.563 6.412H15.725Z"
          fill="#0052B4"
        />
        <path
          d="M0.276 10.587C0.552 11.611 1.025 12.553 1.654 13.37L4.437 10.587H0.276Z"
          fill="#0052B4"
        />
        <path
          d="M12.87 2.153C12.053 1.525 11.11 1.051 10.087 0.775V4.937L12.87 2.153Z"
          fill="#0052B4"
        />
        <path
          d="M3.129 14.845C3.947 15.474 4.889 15.947 5.913 16.223V12.062L3.129 14.845Z"
          fill="#0052B4"
        />
        <path
          d="M5.913 0.775C4.889 1.051 3.947 1.525 3.129 2.153L5.913 4.937V0.775Z"
          fill="#0052B4"
        />
        <path
          d="M10.087 16.223C11.11 15.947 12.053 15.474 12.87 14.845L10.087 12.062V16.223Z"
          fill="#0052B4"
        />
        <path
          d="M11.563 10.587L14.347 13.37C14.975 12.553 15.449 11.611 15.725 10.587H11.563Z"
          fill="#0052B4"
        />
        <path
          d="M15.932 7.457H9.044V0.568C8.702 0.523 8.354 0.5 8 0.5C7.646 0.5 7.298 0.523 6.957 0.568V7.456V7.457H0.068C0.023 7.798 0 8.146 0 8.5C0 8.854 0.023 9.202 0.068 9.543H6.957V16.432C7.298 16.477 7.646 16.5 8 16.5C8.354 16.5 8.702 16.477 9.043 16.432V9.544V9.544H15.932C15.977 9.202 16 8.854 16 8.5C16 8.146 15.977 7.798 15.932 7.457Z"
          fill="#D80027"
        />
        <path
          d="M10.087 10.588L13.657 14.157C13.821 13.993 13.978 13.822 14.127 13.644L11.071 10.588H10.087Z"
          fill="#D80027"
        />
        <path
          d="M5.913 10.588L2.343 14.157C2.507 14.322 2.679 14.478 2.857 14.628L5.913 11.571V10.588Z"
          fill="#D80027"
        />
        <path
          d="M5.913 6.413L2.343 2.843C2.179 3.007 2.022 3.178 1.873 3.356L4.929 6.413H5.913Z"
          fill="#D80027"
        />
        <path
          d="M10.087 6.413L13.657 2.844C13.493 2.679 13.321 2.523 13.143 2.373L10.087 5.43V6.413Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="gb">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function AUFlag() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#au)">
        <path
          d="M16 8.5C16 12.9183 12.4183 16.5 8 16.5C3.582 16.5 0 12.9183 0 8.5C0 8.502 8 0.501 8 0.5C12.4183 0.5 16 4.082 16 8.5Z"
          fill="#0052B4"
        />
        <path
          d="M7.979 8.5H8C8 8.493 8 8.486 8 8.479C7.993 8.486 7.986 8.493 7.979 8.5Z"
          fill="#F0F0F0"
        />
        <path
          d="M8 4.674C8 3.267 8 2.344 8 0.501H7.998C3.581 0.501 0 4.083 0 8.5H4.174V6.15L6.524 8.5H7.978C7.986 8.493 7.993 8.486 8 8.479C8 7.94 8 7.459 8 7.025L5.649 4.674H8Z"
          fill="#F0F0F0"
        />
        <path
          d="M4.047 1.544C2.796 2.256 1.756 3.296 1.044 4.548V8.5H3.13V3.631H8C8 2.973 8 2.346 8 1.544H4.047Z"
          fill="#D80027"
        />
        <path
          d="M8 7.517L5.158 4.674H4.174L8 8.5C8 8.5 8 7.822 8 7.517Z"
          fill="#D80027"
        />
        <path
          d="M4.825 9.891L5.264 10.809L6.256 10.58L5.812 11.496L6.609 12.128L5.616 12.352L5.619 13.369L4.825 12.733L4.031 13.369L4.034 12.352L3.041 12.128L3.839 11.496L3.394 10.58L4.386 10.809L4.825 9.891Z"
          fill="#F0F0F0"
        />
        <path
          d="M11.978 11.63L12.198 12.089L12.693 11.975L12.471 12.433L12.87 12.749L12.374 12.861L12.375 13.369L11.978 13.051L11.581 13.369L11.583 12.861L11.086 12.749L11.485 12.433L11.263 11.975L11.759 12.089L11.978 11.63Z"
          fill="#F0F0F0"
        />
        <path
          d="M9.936 6.761L10.155 7.22L10.651 7.105L10.429 7.563L10.828 7.879L10.331 7.991L10.333 8.5L9.936 8.182L9.539 8.5L9.54 7.991L9.044 7.879L9.442 7.563L9.22 7.105L9.716 7.22L9.936 6.761Z"
          fill="#F0F0F0"
        />
        <path
          d="M11.978 3.978L12.198 4.437L12.693 4.323L12.471 4.781L12.87 5.097L12.374 5.209L12.375 5.718L11.978 5.399L11.581 5.718L11.583 5.209L11.086 5.097L11.485 4.781L11.263 4.323L11.759 4.437L11.978 3.978Z"
          fill="#F0F0F0"
        />
        <path
          d="M13.761 6.065L13.981 6.524L14.477 6.41L14.255 6.867L14.653 7.184L14.157 7.296L14.158 7.804L13.761 7.486L13.365 7.804L13.366 7.296L12.87 7.184L13.268 6.867L13.046 6.41L13.542 6.524L13.761 6.065Z"
          fill="#F0F0F0"
        />
        <path
          d="M12.486 8.5L12.659 9.032H13.218L12.766 9.36L12.938 9.892L12.486 9.563L12.034 9.892L12.207 9.36L11.755 9.032H12.314L12.486 8.5Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="au">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export const countries = [
  { name: "United States", Flag: USFlag },
  { name: "Canada", Flag: CAFlag },
  { name: "United Kingdom", Flag: GBFlag },
  { name: "Australia", Flag: AUFlag },
];

export const categoryIcons: Record<string, React.ReactNode> = {
  health: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="currentColor"
    >
      <path d="M9.266 18.052c-1.07-.199-2.108-.542-3.117-1.031-1.008-.49-1.906-1.169-2.693-2.04-.786-.87-1.42-1.948-1.902-3.231C1.074 10.467.833 8.939.833 7.167V6.983c0-.214.069-.39.206-.527.138-.137.314-.206.528-.206h.183c.779 0 1.581.1 2.406.298.825.199 1.597.496 2.315.894.168-1.131.504-2.292 1.008-3.484.504-1.191 1.108-2.268 1.81-3.231C9.473.467 9.71.338 10 .338c.29 0 .527.13.71.39.703.962 1.306 2.04 1.81 3.231.504 1.191.841 2.353 1.009 3.484.718-.398 1.49-.696 2.314-.894.825-.199 1.627-.298 2.407-.298h.091c.23 0 .424.08.585.24.16.161.24.356.24.585v.091c0 1.772-.24 3.3-.722 4.583-.481 1.283-1.115 2.361-1.902 3.231-.787.871-1.684 1.551-2.693 2.04-1.008.49-2.047.833-3.117 1.031-.198.031-.443.046-.733.046-.29 0-.535-.015-.733-.046Zm.687-1.765c-.168-2.52-.928-4.434-2.28-5.74-1.352-1.306-3.006-2.112-4.961-2.418-.031 0-.031 0 0 0 .168 2.582.951 4.522 2.349 5.821 1.398 1.298 3.029 2.078 4.892 2.337.031.015.031.02 0 .012-.03-.008-.03-.012 0-.012ZM8.212 8.496c.306.26.627.569.963.928.336.36.611.707.825 1.043.229-.336.508-.687.836-1.043.329-.36.646-.669.951-.928-.03-.87-.202-1.78-.516-2.727-.313-.947-.737-1.872-1.271-2.773-.535.901-.959 1.826-1.272 2.773-.313.948-.485 1.857-.516 2.727Zm2.796 3.896c.183.489.34 1.023.47 1.604.13.58.233 1.207.31 1.879.55-.184 1.13-.459 1.742-.825.611-.367 1.176-.855 1.696-1.467.52-.611.97-1.363 1.352-2.257.382-.894.619-1.959.71-3.197 0-.03 0-.03 0 0-1.436.214-2.696.691-3.781 1.432-1.085.741-1.917 1.684-2.498 2.83Z" />
    </svg>
  ),
  social: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
  cpg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
    </svg>
  ),
  fashion: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
    >
      <path d="M5.5 10.038 4.584 10.54c-.214.123-.443.153-.688.092a.916.916 0 0 1-.55-.412L1.513 7.013a.916.916 0 0 1-.092-.688c.061-.244.199-.428.413-.55L7.104 2.75h1.604c.138 0 .249.042.333.126a.453.453 0 0 1 .126.332v.459c0 .504.18.935.539 1.294.359.36.79.539 1.294.539.504 0 .936-.18 1.295-.539.36-.359.539-.79.539-1.294v-.459a.453.453 0 0 1 .126-.332.453.453 0 0 1 .333-.126h1.604l5.27 3.025c.214.122.352.306.413.55.06.244.031.473-.092.688l-1.833 3.208a.916.916 0 0 1-.538.401.925.925 0 0 1-.7-.103l-.917-.46v8.274c0 .26-.088.477-.264.653a.888.888 0 0 1-.652.264H6.417a.888.888 0 0 1-.653-.264.888.888 0 0 1-.264-.653v-8.296Zm1.833-3.07v10.449h7.334V6.967l2.841 1.558.963-1.604-3.942-2.292a4.104 4.104 0 0 1-1.295 1.937A3.664 3.664 0 0 1 11 7.333a3.664 3.664 0 0 1-2.234-.767 4.104 4.104 0 0 1-1.295-1.937l-3.942 2.292.963 1.604 2.841-1.558Z" />
    </svg>
  ),
  tech: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
    >
      <path d="M6.806 8.685 10.221 3.117a1.06 1.06 0 0 1 .344-.332c.137-.069.283-.103.435-.103.153 0 .298.034.435.103.138.069.252.18.344.332l3.415 5.569c.091.153.137.313.137.481 0 .168-.038.32-.114.458a.865.865 0 0 1-.321.332.86.86 0 0 1-.481.127H7.585a.86.86 0 0 1-.481-.127.865.865 0 0 1-.32-.332.88.88 0 0 1-.115-.458c0-.168.046-.328.137-.482ZM16.042 20.167c-1.146 0-2.12-.401-2.922-1.203-.802-.802-1.203-1.776-1.203-2.922 0-1.146.401-2.12 1.203-2.922.802-.802 1.776-1.203 2.922-1.203 1.146 0 2.12.401 2.921 1.203.802.802 1.204 1.776 1.204 2.922 0 1.146-.402 2.12-1.204 2.922-.801.802-1.775 1.203-2.921 1.203ZM2.75 18.792v-5.5c0-.26.088-.478.264-.653a.888.888 0 0 1 .652-.264h5.5c.26 0 .478.088.654.264a.888.888 0 0 1 .263.653v5.5a.888.888 0 0 1-.263.652.888.888 0 0 1-.654.264h-5.5a.888.888 0 0 1-.652-.264.888.888 0 0 1-.264-.652ZM16.042 18.333c.641 0 1.184-.221 1.627-.664.443-.443.664-.986.664-1.627 0-.642-.221-1.184-.664-1.628a2.213 2.213 0 0 0-1.627-.664c-.642 0-1.184.221-1.628.664a2.213 2.213 0 0 0-.664 1.628c0 .641.221 1.184.664 1.627.444.443.986.664 1.628.664ZM4.583 17.875h3.667v-3.667H4.583v3.667ZM9.213 8.25h3.574L11 5.363 9.213 8.25Z" />
    </svg>
  ),
  finance: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
    </svg>
  ),
  entertainment: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  ),
  gaming: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  ),
  education: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  ),
  photo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
  ),
  travel: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  ),
};

const flags = [
  { country: "United States", Flag: USFlag },
  { country: "Canada", Flag: CAFlag },
  { country: "United Kingdom", Flag: GBFlag },
  { country: "Australia", Flag: AUFlag },
];

const flagByCountry: Record<string, React.ComponentType> = {
  "United States": USFlag,
  Canada: CAFlag,
  "United Kingdom": GBFlag,
  Australia: AUFlag,
};

export interface Creator {
  id: number;
  name: string;
  rating: string;
  country: string;
  countryFlag: React.ComponentType;
  gradient: string;
  video: string;
  category: string;
  image?: string;
}

// Per-creator overrides keyed by "category:index"
const creatorOverrides: Record<
  string,
  Partial<Omit<Creator, "id" | "category">>
> = {
  // Health & Wellness: Shelly, Noah, Calvin, Abby, Makena, Bella, Elle
  "health:0": { image: "/creators/Health & Wellness/Shelly.jpeg" },
  "health:1": { image: "/creators/Health & Wellness/Noah.png" },
  "health:2": { image: "/creators/Health & Wellness/Calvin.png" },
  "health:3": { image: "/creators/Health & Wellness/Abby.png" },
  "health:4": { image: "/creators/Health & Wellness/Makena.png" },
  "health:5": { image: "/creators/Health & Wellness/Bella.png" },
  "health:6": { image: "/creators/Health & Wellness/Elle.png" },
  // Social: Ayo, Max, Angela, Madison, Serena, Renae, Carly
  "social:0": { image: "/creators/Social Networks & Relationship/Ayo.png" },
  "social:1": { image: "/creators/Social Networks & Relationship/Max.png" },
  "social:2": { image: "/creators/Social Networks & Relationship/Angela.png" },
  "social:3": { image: "/creators/Social Networks & Relationship/Madison.png" },
  "social:4": { image: "/creators/Social Networks & Relationship/Serena.png" },
  "social:5": { image: "/creators/Social Networks & Relationship/Renae.png" },
  "social:6": { image: "/creators/Social Networks & Relationship/Carly.png" },
  // CPG: Ray, Max, Abby, Vika, Dre, Marcela
  "cpg:0": { image: "/creators/CPG/Ray.png" },
  "cpg:1": { image: "/creators/CPG/Max.png" },
  "cpg:2": { image: "/creators/CPG/Abby.png" },
  "cpg:3": { image: "/creators/CPG/Vika.png" },
  "cpg:4": { image: "/creators/CPG/Dre.png" },
  "cpg:5": { image: "/creators/CPG/Marcela.png" },
  // Fashion: Jess, Alina, Meg, Marissa, Trinity, Sara, Austin
  "fashion:0": { image: "/creators/Apparel & Fashion/Jess.png" },
  "fashion:1": { image: "/creators/Apparel & Fashion/Alina.png" },
  "fashion:2": { image: "/creators/Apparel & Fashion/Meg.jpeg" },
  "fashion:3": { image: "/creators/Apparel & Fashion/Marissa.jpeg" },
  "fashion:4": { image: "/creators/Apparel & Fashion/Trinity.png" },
  "fashion:5": { image: "/creators/Apparel & Fashion/Sara.png" },
  "fashion:6": { image: "/creators/Apparel & Fashion/Austin.jpeg" },
  // Tech: Colin, Ayo, Mackenzie, Paige, Matt, Maxine
  "tech:0": { image: "/creators/Tech & AI/Colin.png" },
  "tech:1": { image: "/creators/Tech & AI/Ayo.png" },
  "tech:2": { image: "/creators/Tech & AI/Mackenzie.png" },
  "tech:3": { image: "/creators/Tech & AI/Paige.png" },
  "tech:4": { image: "/creators/Tech & AI/Matt.png" },
  "tech:5": { image: "/creators/Tech & AI/Maxine.png" },
  // Finance: Cassandra, Monte, Justin, Emmy, Grace
  "finance:0": { image: "/creators/Finance/Cassandra.png" },
  "finance:1": { image: "/creators/Finance/Monte.png" },
  "finance:2": { image: "/creators/Finance/Justin.png" },
  "finance:3": { image: "/creators/Finance/Emmy.png" },
  "finance:4": { image: "/creators/Finance/Grace.png" },
  // Entertainment: Nina, Jenny, Frank, Jacob, Saumya, Gino
  "entertainment:0": { image: "/creators/Entertainment & Music/Nina.png" },
  "entertainment:1": { image: "/creators/Entertainment & Music/Jenny.png" },
  "entertainment:2": { image: "/creators/Entertainment & Music/Frank.png" },
  "entertainment:3": { image: "/creators/Entertainment & Music/Jacob.png" },
  "entertainment:4": { image: "/creators/Entertainment & Music/Saumya.png" },
  "entertainment:5": { image: "/creators/Entertainment & Music/Gino.png" },
  // Gaming: Jordynn, Isaac, Hannah, Trey, Kaiya, Mykaila, Eric
  "gaming:0": { image: "/creators/Gaming & Entertainment/Jordynn.png" },
  "gaming:1": { image: "/creators/Gaming & Entertainment/Isaac.png" },
  "gaming:2": { image: "/creators/Gaming & Entertainment/Hannah.png" },
  "gaming:3": { image: "/creators/Gaming & Entertainment/Trey.jpeg" },
  "gaming:4": { image: "/creators/Gaming & Entertainment/Kaiya.png" },
  "gaming:5": { image: "/creators/Gaming & Entertainment/Mykaila.png" },
  "gaming:6": { image: "/creators/Gaming & Entertainment/Eric.png" },
  // Education: Brianna, Ali, LourDrick, Emma, Joe, Caitlin, Gray
  "education:0": { image: "/creators/Education & Language/Brianna.png" },
  "education:1": { image: "/creators/Education & Language/Ali.png" },
  "education:2": { image: "/creators/Education & Language/LourDrick.png" },
  "education:3": { image: "/creators/Education & Language/Emma.png" },
  "education:4": { image: "/creators/Education & Language/Joe.png" },
  "education:5": { image: "/creators/Education & Language/Caitlin.png" },
  "education:6": { image: "/creators/Education & Language/Gray.png" },
  // Photo: Sarah, Vivi, Hayden, Quis, Gyasi, Maya
  "photo:0": { image: "/creators/Photo & Video Editing/Sarah.png" },
  "photo:1": { image: "/creators/Photo & Video Editing/Vivi.png" },
  "photo:2": { image: "/creators/Photo & Video Editing/Hayden.png" },
  "photo:3": { image: "/creators/Photo & Video Editing/Quis.png" },
  "photo:4": { image: "/creators/Photo & Video Editing/Gyasi.png" },
  "photo:5": { image: "/creators/Photo & Video Editing/Maya.png" },
  // Travel: Lydia, Nessa, Shelby, Alyssa, Victor, Tatsuya, Larine
  "travel:0": { image: "/creators/Travel/lydia.png" },
  "travel:1": { image: "/creators/Travel/Nessa.png" },
  "travel:2": { image: "/creators/Travel/Shelby.png" },
  "travel:3": { image: "/creators/Travel/Alyssa.png" },
  "travel:4": { image: "/creators/Travel/Victor.png" },
  "travel:5": { image: "/creators/Travel/Tatsuya.png" },
  "travel:6": { image: "/creators/Travel/Larine.png" },
};

export const creatorsData: Creator[] = categories.flatMap((cat, catIdx) =>
  namesByCat[cat.id].map((name, i) => {
    const overrides = creatorOverrides[`${cat.id}:${i}`];
    return {
      id: catIdx * 7 + i + 1,
      name,
      rating: (ratingsByCat[cat.id] ?? [])[i] ?? "4.5",
      country: (countriesByCat[cat.id] ?? [])[i] ?? "United States",
      countryFlag:
        flagByCountry[(countriesByCat[cat.id] ?? [])[i] ?? "United States"] ??
        USFlag,
      gradient: gradients[i],
      video: (videosByCategory[cat.id] ?? dummyVideos)[
        i % (videosByCategory[cat.id] ?? dummyVideos).length
      ],
      category: cat.id,
      ...overrides,
    };
  }),
);

export const platformLinks = [
  {
    label: "Instagram",
    href: "/platform/instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "/platform/tiktok",
    icon: (
      <svg width="14" height="16" viewBox="0 0 448 512" fill="currentColor">
        <path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 121v88.9z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "/platform/youtube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "/platform/facebook",
    icon: (
      <svg width="14" height="16" viewBox="0 0 320 512" fill="currentColor">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
];
