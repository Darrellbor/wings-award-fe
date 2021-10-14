import React from 'react';

interface PersonalDevelopmentProps {
  color?: string;
}

export const PersonalDevelopment = ({ color }: PersonalDevelopmentProps): JSX.Element => {
  return (
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none">
      <g clipPath="url(#clip0_401:2)">
        <path
          d="M334.859 331.013C335.492 304.719 387.28 271.27 386.989 198.23C386.837 161.496 351.212 100.447 290.711 92.8217C230.218 85.2041 184.955 98.5237 165.158 135.816C145.372 173.102 143.859 205.84 145.387 211.905C146.922 218.009 153.382 229.416 153.382 229.416C153.382 229.416 122.929 276.217 124.835 283.812C126.733 291.437 147.65 295.554 147.65 295.554C147.65 295.554 149.511 300.833 145.697 311.107C141.923 321.363 152.793 333.313 156.03 337.458C159.297 341.634 151.476 354.586 154.14 361.816C156.81 369.046 169.357 377.809 183.822 375.918C198.292 374.01 216.854 370.589 223.316 369.443C237.861 403.695 202.769 421.213 202.769 421.213H387.294C387.277 421.24 333.738 378.216 334.859 331.013ZM270.711 165.417C270.711 150.689 282.691 138.693 297.427 138.693C312.192 138.693 324.175 150.691 324.175 165.417V174.503H314.267V165.417C314.267 156.157 306.719 148.609 297.429 148.609C288.17 148.609 280.637 156.16 280.637 165.417V174.503H270.713V165.417H270.711ZM334.57 231.445C334.57 234.169 332.362 236.4 329.654 236.4H265.28C262.537 236.4 260.303 234.169 260.303 231.445V181.914C260.303 179.206 262.549 176.975 265.28 176.975H329.654C332.377 176.975 334.57 179.206 334.57 181.914V231.445Z"
          fill={color ? color : '#571C56'}
        />
        <path
          d="M256 0C114.842 0 0 114.842 0 256.005C0 397.156 114.842 511.997 256 511.997C397.156 511.997 512 397.156 512 256.005C512 114.842 397.156 0 256 0ZM256 481.013C131.916 481.013 30.9845 380.06 30.9845 256.005C30.9845 131.931 131.916 30.9845 256 30.9845C380.092 30.9845 481.016 131.916 481.016 256.005C481.016 380.089 380.092 481.013 256 481.013Z"
          fill={color ? color : '#571C56'}
        />
      </g>
      <defs>
        <clipPath id="clip0_401:2">
          <rect width="512" height="511.997" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PersonalDevelopment;