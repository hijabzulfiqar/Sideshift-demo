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
    "https://embed-ssl.wistia.com/deliveries/ce227785c20ef3b1c6812f4b9f3fe6ecdec550a1.bin",
    "https://embed-ssl.wistia.com/deliveries/428b2eac082e732324cd816ece6f4858f25a1d5c.bin",
    "https://embed-ssl.wistia.com/deliveries/d58d5845e4d42d00296ad0c312c02fa784aeab0b.bin",
    "https://embed-ssl.wistia.com/deliveries/2159c409213a2df148755d3f363fa5b1711a66bc.bin",
    "https://embed-ssl.wistia.com/deliveries/747baf31a63dce31c304fefafa0e84b3d99ca88d.bin",
    "https://embed-ssl.wistia.com/deliveries/6e4d505f4198edf1684301165225cb03c82e9a74.bin",
  ],
  fashion: [
    "https://embed-ssl.wistia.com/deliveries/306ea097ea2fdaa96e76d48eebfbad4cabfcd1ca.bin",
    "https://embed-ssl.wistia.com/deliveries/87fdaa4163db9e7e69f20a9154bf456d7373dc22.bin",
    "https://embed-ssl.wistia.com/deliveries/6426cbf578c4feb1d6f0d73bb013ef635261e3a6.bin",
    "https://embed-ssl.wistia.com/deliveries/cf228f37d89d424b5f2f88d9964200941ee5d2ec.bin",
    "https://embed-ssl.wistia.com/deliveries/e15f6b80bf4de194ba9626181266d9f7fb8193b3.bin",
    "https://embed-ssl.wistia.com/deliveries/a7884c0e7842a2b1a4c8ab6a9d5c30fe7dc14885.bin",
    "https://embed-ssl.wistia.com/deliveries/56af918a69fd7e64a7cb0bc10e8ae54987601236.bin",
  ],
  food: [
    "https://embed-ssl.wistia.com/deliveries/8da790ed4ef31f55484f87a60b6ea1a11559431a.bin",
    "https://embed-ssl.wistia.com/deliveries/01f367a620ad3a7df55715b7d25a1349c43c317f.bin",
  ],
  tech: [
    "https://embed-ssl.wistia.com/deliveries/89eda5298447436e00a697bebb3aa474e84b3c13.bin",
    "https://embed-ssl.wistia.com/deliveries/b93e6922d3a1a7affa36487ec8bce45f0ec70698.bin",
  ],
  pets: [
    "https://embed-ssl.wistia.com/deliveries/438c2802fbb48485446f3b4591c831b870145c86.bin",
    "https://embed-ssl.wistia.com/deliveries/bd3168831ebb5facede34734fd9004588342ce81.bin",
    "https://embed-ssl.wistia.com/deliveries/86ab9664c3858e494b4712d8abb88fb06c110055.bin",
    "https://embed-ssl.wistia.com/deliveries/22d5c48567dca00a34907ed097708126cbf31012.bin",
  ],
  relationship: [
    "https://embed-ssl.wistia.com/deliveries/03444ab2207cf1c92433df2e883f0be577271f4d.bin",
    "https://embed-ssl.wistia.com/deliveries/fd331b72daa7beb9dadc0b7ec89cf7040cf63b3e.bin",
    "https://embed-ssl.wistia.com/deliveries/80eb491a25585fee63065d7899fe4935a300ec6f.bin",
    "https://embed-ssl.wistia.com/deliveries/3be6fe01bc0746adf057ff9d8f82a0ebbdd1a09e.bin",
    "https://embed-ssl.wistia.com/deliveries/d7258e3548f22a42712adab64c1f291ad3ab14f6.bin",
    "https://embed-ssl.wistia.com/deliveries/c8d9e9f4f1384fae75921437428d93c65eebb861.bin",
    "https://embed-ssl.wistia.com/deliveries/2639707165867fde70a964bc1f6f1aa07a48e301.bin",
    "https://embed-ssl.wistia.com/deliveries/261d608eb051cceb969c0deb8f08fa1900f170b4.bin",
    "https://embed-ssl.wistia.com/deliveries/7886f989af4ff0e2c8f6b5c376f1be6f43c5c669.bin",
    "https://embed-ssl.wistia.com/deliveries/2e8362a75412960ffc33b643cd31c262fbb549bb.bin",
    "https://embed-ssl.wistia.com/deliveries/308d0a241f2f82f72a551858d607690aa3fb924a.bin",
    "https://embed-ssl.wistia.com/deliveries/221f66593294386ca7394b37636a7b020859351b.bin",
    "https://embed-ssl.wistia.com/deliveries/d04b0acd59cf825f0775960694639108f46c6b56.bin",
  ],
  creative: [
    "https://embed-ssl.wistia.com/deliveries/3e5fb44c78591f8712b12aa3cecb5e3122ea0dca.bin",
    "https://embed-ssl.wistia.com/deliveries/4429de48e7fabf9f1c5e2a90b2bcbbb1f61b34ae.bin",
    "https://embed-ssl.wistia.com/deliveries/34481251b18afb87e8eda6479b21b4692d9a2ceb.bin",
    "https://embed-ssl.wistia.com/deliveries/1aaa0500ded246150733524011195f49734214d0.bin",
    "https://embed-ssl.wistia.com/deliveries/f5ba8cf4791cd2555a522b8b6f5f803fb9e6468b.bin",
    "https://embed-ssl.wistia.com/deliveries/7b510012276423ccf323bf33add46629aca46372.bin",
    "https://embed-ssl.wistia.com/deliveries/2703b6eaf114e8e56959d8552c41653f02e00ef4.bin",
    "https://embed-ssl.wistia.com/deliveries/75d7f7cb12c8afffd3e2ffddf8f2d55f07a6de13.bin",
  ],
  entertainment: [
    "https://embed-ssl.wistia.com/deliveries/55aeca5df32552306ea9b682522c9c78f6bd43d3.bin",
    "https://embed-ssl.wistia.com/deliveries/6061573a3d9ddf81871459531e88fc3a7d602fa0.bin",
    "https://embed-ssl.wistia.com/deliveries/4eb380d391179e237df8c4e8d962d6b8436d661c.bin",
    "https://embed-ssl.wistia.com/deliveries/1e5d522a4b14ca3f712814c2b82f405f55077565.bin",
  ],
  finance: [
    "https://embed-ssl.wistia.com/deliveries/359d3088032336cd044f8c8246e21f8c92dc2e49.bin",
    "https://embed-ssl.wistia.com/deliveries/83dfb89e7284032ddef3da4a1049ae0fe8838575.bin",
  ],
  gaming: [
    "https://embed-ssl.wistia.com/deliveries/c91fd99e8fa01acd1069d4aea6ae1c8dd9445ded.bin",
    "https://embed-ssl.wistia.com/deliveries/a80b2cab13553f4c3c54aabd4c2c43db71630888.bin",
    "https://embed-ssl.wistia.com/deliveries/eaff9ee5ea1c2367d84081fd27d131d496f4ce42.bin",
  ],
  education: [
    "https://embed-ssl.wistia.com/deliveries/19be6922406879a02f7e8281b74d6ffab32f05de.bin",
    "https://embed-ssl.wistia.com/deliveries/0787daf59d7e06761b2dc9a09e0a910ff7aa7af3.bin",
    "https://embed-ssl.wistia.com/deliveries/68a504980f61ed97baa757683d2cd239c59f6d6e.bin",
    "https://embed-ssl.wistia.com/deliveries/e2be1fb2fd014581b64b2dcfd8e3369ebd76c283.bin",
    "https://embed-ssl.wistia.com/deliveries/89e5cc11e1183b9c3bed4d2fe3f1b462dc2f1baf.bin",
    "https://embed-ssl.wistia.com/deliveries/1004c99cab20f774bd6efce94a37f1b62256dd7a.bin",
    "https://embed-ssl.wistia.com/deliveries/567c120a9a7650a3180c009777adc71e5591965c.bin",
    "https://embed-ssl.wistia.com/deliveries/630c76d82a523b546f0506aee4032acfa227c086.bin",
    "https://embed-ssl.wistia.com/deliveries/977d29ec70b03824f8c1146d58c4abd811fb1239.bin",
    "https://embed-ssl.wistia.com/deliveries/32fa92f0a37bd6f7fc773e69717be03149fb5380.bin",
    "https://embed-ssl.wistia.com/deliveries/eb1c92bfcf1518595f446d6f9d99d6dfedda3d56.bin",
    "https://embed-ssl.wistia.com/deliveries/20df0f4ff0bb46ec0e231a1fa1a83cf612ed4866.bin",
    "https://embed-ssl.wistia.com/deliveries/d0390f6378c248d75e84dfd3c0243e5fb5d4fcca.bin",
    "https://embed-ssl.wistia.com/deliveries/53d3b2cde8875f4749f1debd0f4fb3d0a4b58b2d.bin",
  ],
};

export const categories = [
  { id: "health", label: "Health & Wellness" },
  { id: "relationship", label: "Relationship" },
  { id: "fashion", label: "Apparel & Fashion" },
  { id: "apps", label: "Apps & Digital Services" },
  { id: "food", label: "Food & Beverage" },
  { id: "pets", label: "Pets" },
  { id: "family", label: "Children & Family" },
  { id: "tech", label: "Technology & Gadgets" },
  { id: "creative", label: "Creative Tool" },
  { id: "entertainment", label: "Entertainment" },
  { id: "finance", label: "Finance" },
  { id: "gaming", label: "Gaming" },
  { id: "education", label: "Education" },
];

export const namesByCat: Record<string, string[]> = {
  health: ["Natalie", "Marcus", "Sophia", "Rosh", "Alexis", "Taylor", "Jamie"],
  relationship: ["Jordan", "Emily", "Ava", "Liam", "Chloe", "Megan", "Priya"],
  fashion: ["Mia", "Noah", "Zara", "Harper", "Ella", "Diego", "Suki"],
  apps: ["Jake", "Lily", "Oscar", "Isla", "Leo", "Arun", "Casey"],
  food: ["Grace", "Ben", "Olive", "Sam", "Ruby", "Marco", "Nina"],
  pets: ["Max", "Luna", "Finn", "Aria", "Kai", "Zoe", "Rex"],
  family: ["Ivy", "Dylan", "Willow", "Ezra", "Nora", "Teri", "Shane"],
  tech: ["Owen", "Hazel", "Asher", "Elena", "Felix", "Yuki", "Dana"],
  creative: ["Stella", "Adam", "Cora", "Henry", "Iris", "Nico", "Faye"],
  entertainment: ["Ravi", "Tessa", "Blake", "Sienna", "Jace", "Mina", "Cole"],
  finance: ["Quinn", "Archer", "Leah", "Rohan", "Kira", "Ethan", "Nadia"],
  gaming: ["Axel", "Zara", "Koda", "Nova", "Reese", "Yara", "Theo"],
  education: ["Maya", "Derek", "Priti", "Lucas", "Sasha", "Omar", "Freya"],
};

export const ratingOptions = ["4.6", "4.7", "4.8", "4.9", "5.0", "5.0", "4.9"];

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
  { label: "Relationship", categoryId: "relationship" },
  { label: "Apparel & Fashion", categoryId: "fashion" },
  { label: "Food & Beverage", categoryId: "food" },
  { label: "Technology", categoryId: "tech" },
  { label: "Creative Tool", categoryId: "creative" },
  { label: "Entertainment", categoryId: "entertainment" },
  { label: "Finance", categoryId: "finance" },
  { label: "Gaming", categoryId: "gaming" },
  { label: "Education", categoryId: "education" },
  { label: "Pets", categoryId: "pets" },
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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="currentColor">
      <path d="M9.266 18.052c-1.07-.199-2.108-.542-3.117-1.031-1.008-.49-1.906-1.169-2.693-2.04-.786-.87-1.42-1.948-1.902-3.231C1.074 10.467.833 8.939.833 7.167V6.983c0-.214.069-.39.206-.527.138-.137.314-.206.528-.206h.183c.779 0 1.581.1 2.406.298.825.199 1.597.496 2.315.894.168-1.131.504-2.292 1.008-3.484.504-1.191 1.108-2.268 1.81-3.231C9.473.467 9.71.338 10 .338c.29 0 .527.13.71.39.703.962 1.306 2.04 1.81 3.231.504 1.191.841 2.353 1.009 3.484.718-.398 1.49-.696 2.314-.894.825-.199 1.627-.298 2.407-.298h.091c.23 0 .424.08.585.24.16.161.24.356.24.585v.091c0 1.772-.24 3.3-.722 4.583-.481 1.283-1.115 2.361-1.902 3.231-.787.871-1.684 1.551-2.693 2.04-1.008.49-2.047.833-3.117 1.031-.198.031-.443.046-.733.046-.29 0-.535-.015-.733-.046Zm.687-1.765c-.168-2.52-.928-4.434-2.28-5.74-1.352-1.306-3.006-2.112-4.961-2.418-.031 0-.031 0 0 0 .168 2.582.951 4.522 2.349 5.821 1.398 1.298 3.029 2.078 4.892 2.337.031.015.031.02 0 .012-.03-.008-.03-.012 0-.012ZM8.212 8.496c.306.26.627.569.963.928.336.36.611.707.825 1.043.229-.336.508-.687.836-1.043.329-.36.646-.669.951-.928-.03-.87-.202-1.78-.516-2.727-.313-.947-.737-1.872-1.271-2.773-.535.901-.959 1.826-1.272 2.773-.313.948-.485 1.857-.516 2.727Zm2.796 3.896c.183.489.34 1.023.47 1.604.13.58.233 1.207.31 1.879.55-.184 1.13-.459 1.742-.825.611-.367 1.176-.855 1.696-1.467.52-.611.97-1.363 1.352-2.257.382-.894.619-1.959.71-3.197 0-.03 0-.03 0 0-1.436.214-2.696.691-3.781 1.432-1.085.741-1.917 1.684-2.498 2.83Z" />
    </svg>
  ),
  relationship: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  fashion: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M5.5 10.038 4.584 10.54c-.214.123-.443.153-.688.092a.916.916 0 0 1-.55-.412L1.513 7.013a.916.916 0 0 1-.092-.688c.061-.244.199-.428.413-.55L7.104 2.75h1.604c.138 0 .249.042.333.126a.453.453 0 0 1 .126.332v.459c0 .504.18.935.539 1.294.359.36.79.539 1.294.539.504 0 .936-.18 1.295-.539.36-.359.539-.79.539-1.294v-.459a.453.453 0 0 1 .126-.332.453.453 0 0 1 .333-.126h1.604l5.27 3.025c.214.122.352.306.413.55.06.244.031.473-.092.688l-1.833 3.208a.916.916 0 0 1-.538.401.925.925 0 0 1-.7-.103l-.917-.46v8.274c0 .26-.088.477-.264.653a.888.888 0 0 1-.652.264H6.417a.888.888 0 0 1-.653-.264.888.888 0 0 1-.264-.653v-8.296Zm1.833-3.07v10.449h7.334V6.967l2.841 1.558.963-1.604-3.942-2.292a4.104 4.104 0 0 1-1.295 1.937A3.664 3.664 0 0 1 11 7.333a3.664 3.664 0 0 1-2.234-.767 4.104 4.104 0 0 1-1.295-1.937l-3.942 2.292.963 1.604 2.841-1.558Z" />
    </svg>
  ),
  apps: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M6.416 21.083c-.504 0-.935-.18-1.294-.538a1.763 1.763 0 0 1-.539-1.295V2.75c0-.504.18-.936.539-1.295a1.763 1.763 0 0 1 1.294-.538h9.167c.504 0 .936.18 1.295.538.359.36.538.791.538 1.295v16.5c0 .504-.179.936-.538 1.295-.36.359-.791.538-1.295.538H6.416Zm0-4.583v2.75h9.167V16.5H6.416Zm4.584 2.292c.26 0 .477-.088.653-.264a.888.888 0 0 0 .264-.653.888.888 0 0 0-.264-.653.888.888 0 0 0-.653-.264.888.888 0 0 0-.653.264.888.888 0 0 0-.264.653c0 .26.088.477.264.653a.888.888 0 0 0 .653.264ZM6.416 14.667h9.167V5.5H6.416v9.167Zm0-11V2.75h9.167v.917H6.416Z" />
    </svg>
  ),
  food: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M3.666 19.25c-.504 0-.936-.18-1.295-.538a1.763 1.763 0 0 1-.538-1.295v-1.834c0-.26.088-.477.263-.653a.888.888 0 0 1 .654-.263h16.5c.26 0 .477.088.653.263a.888.888 0 0 1 .264.653v1.834c0 .504-.18.935-.539 1.295a1.763 1.763 0 0 1-1.295.538H3.666Zm0-2.75v.917h14.667V16.5H3.666ZM11 12.375c-.55 0-.986.153-1.307.458-.321.306-.909.459-1.764.459-.856 0-1.436-.153-1.742-.459-.305-.305-.733-.458-1.284-.458-.428 0-.775.103-1.042.31-.268.205-.631.37-1.089.492a.72.72 0 0 1-.653-.15.732.732 0 0 1-.286-.652c0-.26.088-.485.263-.676.176-.19.386-.348.631-.47.26-.137.542-.286.848-.447.305-.16.749-.24 1.329-.24.856 0 1.436.153 1.742.458.305.306.733.459 1.283.459s.986-.153 1.307-.459c.32-.305.909-.458 1.764-.458.855 0 1.444.153 1.764.458.321.306.756.459 1.307.459.55 0 .978-.153 1.283-.459.306-.305.887-.458 1.742-.458.55 0 .986.076 1.307.229.32.153.611.298.87.436.245.122.455.283.631.481.176.199.264.428.264.688 0 .26-.092.477-.275.653a.72.72 0 0 1-.654.15 3.29 3.29 0 0 1-1.042-.493c-.252-.206-.593-.309-1.042-.309-.55 0-1.006.153-1.355.458-.336.306-.924.459-1.764.459s-1.443-.153-1.764-.459c-.32-.305-.756-.458-1.306-.458ZM11 2.75c1.13 0 2.242.103 3.334.31 1.092.206 2.07.527 2.934.962.863.435 1.562 1 2.097 1.696.535.695.802 1.54.802 2.532 0 .26-.088.477-.264.653a.888.888 0 0 1-.653.264H2.75a.888.888 0 0 1-.653-.264.888.888 0 0 1-.264-.653c0-.993.267-1.837.802-2.532.535-.696 1.234-1.261 2.097-1.696.863-.435 1.842-.756 2.934-.962 1.092-.207 2.204-.31 3.334-.31Zm0 1.833c-1.894 0-3.48.237-4.756.71-1.275.474-2.089 1.154-2.44 2.04h14.391c-.35-.886-1.165-1.566-2.44-2.04-1.276-.473-2.862-.71-4.756-.71Z" />
    </svg>
  ),
  pets: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M4.125 11.115c-.642 0-1.184-.222-1.627-.665a2.272 2.272 0 0 1-.665-1.627c0-.642.222-1.184.665-1.627a2.272 2.272 0 0 1 1.627-.665c.641 0 1.184.222 1.627.665.443.443.665.985.665 1.627 0 .641-.222 1.184-.665 1.627a2.272 2.272 0 0 1-1.627.665Zm4.125-3.667c-.642 0-1.184-.221-1.627-.664a2.272 2.272 0 0 1-.665-1.628c0-.641.222-1.183.665-1.627a2.272 2.272 0 0 1 1.627-.664c.641 0 1.184.221 1.627.664.443.443.665.986.665 1.627 0 .642-.222 1.184-.665 1.628a2.272 2.272 0 0 1-1.627.664Zm5.5 0c-.642 0-1.184-.221-1.627-.664a2.272 2.272 0 0 1-.665-1.628c0-.641.222-1.183.665-1.627a2.272 2.272 0 0 1 1.627-.664c.641 0 1.184.221 1.627.664.443.443.665.986.665 1.627 0 .642-.222 1.184-.665 1.628a2.272 2.272 0 0 1-1.627.664Zm4.125 3.667c-.642 0-1.184-.222-1.627-.665a2.272 2.272 0 0 1-.665-1.627c0-.642.222-1.184.665-1.627a2.272 2.272 0 0 1 1.627-.665c.641 0 1.184.222 1.627.665.443.443.665.985.665 1.627 0 .641-.222 1.184-.665 1.627a2.272 2.272 0 0 1-1.627.665ZM6.096 20.281c-.688 0-1.264-.264-1.73-.79-.466-.528-.697-1.15-.697-1.868 0-.795.271-1.49.813-2.086.542-.596 1.081-1.184 1.616-1.764.443-.474.825-.988 1.146-1.546.32-.558.703-1.081 1.146-1.57.336-.397.725-.726 1.169-.986.443-.26.924-.39 1.443-.39.52 0 1 .122 1.444.367.443.244.833.565 1.169.962.428.489.806 1.016 1.135 1.581.328.566.714 1.092 1.157 1.581.535.58 1.074 1.169 1.616 1.765.542.596.813 1.29.813 2.085 0 .718-.233 1.34-.699 1.868-.466.527-1.043.79-1.73.79-.826 0-1.643-.068-2.453-.206-.81-.137-1.628-.206-2.453-.206s-1.642.069-2.452.206c-.81.138-1.627.206-2.453.206Z" />
    </svg>
  ),
  family: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M13.2917 10.7708C12.9708 10.7708 12.6997 10.6601 12.4781 10.4385C12.2566 10.217 12.1458 9.94583 12.1458 9.625C12.1458 9.30417 12.2566 9.03299 12.4781 8.81146C12.6997 8.58993 12.9708 8.47917 13.2917 8.47917C13.6125 8.47917 13.8837 8.58993 14.1052 8.81146C14.3267 9.03299 14.4375 9.30417 14.4375 9.625C14.4375 9.94583 14.3267 10.217 14.1052 10.4385C13.8837 10.6601 13.6125 10.7708 13.2917 10.7708ZM8.70833 10.7708C8.3875 10.7708 8.11632 10.6601 7.89479 10.4385C7.67326 10.217 7.5625 9.94583 7.5625 9.625C7.5625 9.30417 7.67326 9.03299 7.89479 8.81146C8.11632 8.58993 8.3875 8.47917 8.70833 8.47917C9.02917 8.47917 9.30035 8.58993 9.52188 8.81146C9.7434 9.03299 9.85417 9.30417 9.85417 9.625C9.85417 9.94583 9.7434 10.217 9.52188 10.4385C9.30035 10.6601 9.02917 10.7708 8.70833 10.7708ZM11 15.5833C10.0833 15.5833 9.25451 15.3313 8.51354 14.8271C7.77257 14.3229 7.22639 13.6583 6.875 12.8333H15.125C14.7736 13.6583 14.2274 14.3229 13.4865 14.8271C12.7455 15.3313 11.9167 15.5833 11 15.5833ZM11 19.25C9.85417 19.25 8.7809 19.0323 7.78021 18.5969C6.77951 18.1615 5.90868 17.5733 5.16771 16.8323C4.42674 16.0913 3.83854 15.2205 3.40312 14.2198C2.96771 13.2191 2.75 12.1458 2.75 11C2.75 9.85417 2.96771 8.7809 3.40312 7.78021C3.83854 6.77951 4.42674 5.90868 5.16771 5.16771C5.90868 4.42674 6.77951 3.83854 7.78021 3.40312C8.7809 2.96771 9.85417 2.75 11 2.75C12.1458 2.75 13.2191 2.96771 14.2198 3.40312C15.2205 3.83854 16.0913 4.42674 16.8323 5.16771C17.5733 5.90868 18.1615 6.77951 18.5969 7.78021C19.0323 8.7809 19.25 9.85417 19.25 11C19.25 12.1458 19.0323 13.2191 18.5969 14.2198C18.1615 15.2205 17.5733 16.0913 16.8323 16.8323C16.0913 17.5733 15.2205 18.1615 14.2198 18.5969C13.2191 19.0323 12.1458 19.25 11 19.25ZM11 17.4167C12.7722 17.4167 14.2847 16.7903 15.5375 15.5375C16.7903 14.2847 17.4167 12.7722 17.4167 11C17.4167 9.22778 16.7903 7.71528 15.5375 6.4625C14.2847 5.20972 12.7722 4.58333 11 4.58333C9.22778 4.58333 7.71528 5.20972 6.4625 6.4625C5.20972 7.71528 4.58333 9.22778 4.58333 11C4.58333 12.7722 5.20972 14.2847 6.4625 15.5375C7.71528 16.7903 9.22778 17.4167 11 17.4167Z" />
    </svg>
  ),
  tech: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
      <path d="M6.806 8.685 10.221 3.117a1.06 1.06 0 0 1 .344-.332c.137-.069.283-.103.435-.103.153 0 .298.034.435.103.138.069.252.18.344.332l3.415 5.569c.091.153.137.313.137.481 0 .168-.038.32-.114.458a.865.865 0 0 1-.321.332.86.86 0 0 1-.481.127H7.585a.86.86 0 0 1-.481-.127.865.865 0 0 1-.32-.332.88.88 0 0 1-.115-.458c0-.168.046-.328.137-.482ZM16.042 20.167c-1.146 0-2.12-.401-2.922-1.203-.802-.802-1.203-1.776-1.203-2.922 0-1.146.401-2.12 1.203-2.922.802-.802 1.776-1.203 2.922-1.203 1.146 0 2.12.401 2.921 1.203.802.802 1.204 1.776 1.204 2.922 0 1.146-.402 2.12-1.204 2.922-.801.802-1.775 1.203-2.921 1.203ZM2.75 18.792v-5.5c0-.26.088-.478.264-.653a.888.888 0 0 1 .652-.264h5.5c.26 0 .478.088.654.264a.888.888 0 0 1 .263.653v5.5a.888.888 0 0 1-.263.652.888.888 0 0 1-.654.264h-5.5a.888.888 0 0 1-.652-.264.888.888 0 0 1-.264-.652ZM16.042 18.333c.641 0 1.184-.221 1.627-.664.443-.443.664-.986.664-1.627 0-.642-.221-1.184-.664-1.628a2.213 2.213 0 0 0-1.627-.664c-.642 0-1.184.221-1.628.664a2.213 2.213 0 0 0-.664 1.628c0 .641.221 1.184.664 1.627.444.443.986.664 1.628.664ZM4.583 17.875h3.667v-3.667H4.583v3.667ZM9.213 8.25h3.574L11 5.363 9.213 8.25Z" />
    </svg>
  ),
  creative: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 14c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V3.5a.5.5 0 0 1 1 0v4.67c1.16.42 2 1.52 2 2.83 0 1.66-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm9.71-2.71L15.3 8.7a1 1 0 0 1-1.41 0L12.5 7.29a1 1 0 0 1 0-1.41l1.41-1.42a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1-.03 1.41zM20 12l-4.5 4.5-1.41-1.41L17.17 12H10v-2h7.17l-3.08-3.09 1.41-1.41L20 10v2zM7 16a5 5 0 0 0 5 5h5v-2h-5a3 3 0 0 1-3-3H7z" />
    </svg>
  ),
  entertainment: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
    </svg>
  ),
  finance: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
    </svg>
  ),
  gaming: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  ),
  education: (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  ),
};

const flags = [
  { country: "United States", Flag: USFlag },
  { country: "Canada", Flag: CAFlag },
  { country: "United Kingdom", Flag: GBFlag },
  { country: "Australia", Flag: AUFlag },
];

export interface Creator {
  id: number;
  name: string;
  rating: string;
  country: string;
  countryFlag: React.ComponentType;
  gradient: string;
  video: string;
  category: string;
}

export const creatorsData: Creator[] = categories.flatMap((cat, catIdx) =>
  namesByCat[cat.id].map((name, i) => ({
    id: catIdx * 7 + i + 1,
    name,
    rating: ratingOptions[i],
    country: flags[i % flags.length].country,
    countryFlag: flags[i % flags.length].Flag,
    gradient: gradients[i],
    video: (videosByCategory[cat.id] ?? dummyVideos)[
      i % (videosByCategory[cat.id] ?? dummyVideos).length
    ],
    category: cat.id,
  })),
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
