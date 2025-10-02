export function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <a
        href="https://drive.google.com/file/d/1dtBKTFjnGFqdcyo1n34rx2MbW2FvdQiL/view?usp=sharing"
        target="_blank" rel="noopener noreferrer"
        className="px-3 py-3 rounded-2xl bg-teal-400 text-white text-base font-normal inline-flex items-center"
      >
        Resume
      </a>

      <a href="https://www.linkedin.com/in/matthewraganlee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
          <circle cx="20" cy="20.5" r="20" fill="#00C3C1" />
          <path d="M13 16.5H8V32.5H13V16.5Z" fill="white" />
          <path
            d="M27 15.5C26.8098 15.4762 26.2021 15.5119 26 15.5C23.1114 15.3811 21.5706 16.7625 21 17.5C20.8455 17.7022 21 18.5 21 18.5V15.5H16V32.5H21C21 30.8228 21 29.1772 21 27.5C21 26.596 21 25.404 21 24.5C21 23.3819 21.4413 22.5229 22 21.5C22.4755 20.6436 23.0371 20.5 24 20.5C26.8529 20.5 27 22.2621 27 22.5C27 22.5 27 22.5119 27 22.5V32.5H32V21.5C32 17.8245 30.2927 15.8568 27 15.5Z"
            fill="white"
          />
          <path
            d="M11 14.5C12.6569 14.5 14 13.1569 14 11.5C14 9.84315 12.6569 8.5 11 8.5C9.34315 8.5 8 9.84315 8 11.5C8 13.1569 9.34315 14.5 11 14.5Z"
            fill="white"
          />
        </svg>
      </a>

      <a href="https://www.facebook.com/matthewraganlee" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
          <circle cx="20" cy="20.5" r="20" fill="#00C3C1" />
          <path
            d="M21 22.4927V33.4532H16V22.4927H12V18.507H16V16.5142C16 10.5955 18.6658 7.54651 24 7.54651C25.6353 7.54651 26.1045 7.33649 27 7.54651V12.5286C25.9974 12.3567 26.0415 12.5286 25 12.5286C23.7638 12.5286 22.6035 12.8472 22 13.525C21.3965 14.2028 21 14.834 21 16.5142V18.507H27L25 22.4927H21Z"
            fill="white"
          />
        </svg>
      </a>

      <a href="https://www.instagram.com/mattrlee/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
          <circle cx="20" cy="20.5" r="20" fill="#00C3C1" />
          <path
            d="M28 32.5H12C9.7922 32.5 8 30.7078 8 28.5V12.5C8 10.2922 9.7922 8.5 12 8.5H28C30.2078 8.5 32 10.2922 32 12.5V28.5C32 30.7177 30.2177 32.5 28 32.5Z"
            fill="white"
          />
          <path
            d="M27 13.5C27.5523 13.5 28 13.0523 28 12.5C28 11.9477 27.5523 11.5 27 11.5C26.4477 11.5 26 11.9477 26 12.5C26 13.0523 26.4477 13.5 27 13.5Z"
            fill="#00C3C1"
          />
          <circle cx="20" cy="21.5" r="7" fill="#00BCB9" />
          <circle cx="20" cy="21.5" r="4" fill="white" />
        </svg>
      </a>

      <a href="https://x.com/mattrlee" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
          <circle cx="20" cy="20.5" r="20" fill="#00C3C1" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 9.5H8L17 21.5L9 31.5H12L19 23.5L24 31.5H32L23 19.5L31 9.5H27L21 16.5L16 9.5ZM12 11.5H15L28 29.5H25L12 11.5Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
}
