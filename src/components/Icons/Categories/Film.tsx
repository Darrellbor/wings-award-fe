import React from 'react';

interface FilmProps {
  color?: string;
}

export const Film = ({ color }: FilmProps): JSX.Element => {
  return (
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none">
      <path
        d="M503.322 494.644C465.044 494.644 433.898 463.499 433.898 425.22C433.898 425.142 433.855 425.073 433.855 424.995C476.846 379.826 503.322 318.794 503.322 251.661C503.322 112.9 390.422 0 251.661 0C112.9 0 0 112.9 0 251.661C0 390.422 112.9 503.322 251.661 503.322C315.357 503.322 373.569 479.484 417.948 440.32C425.125 480.985 460.635 512 503.322 512C508.121 512 512 508.121 512 503.322C512 498.523 508.121 494.644 503.322 494.644ZM17.3559 251.661C17.3559 122.463 122.463 17.3559 251.661 17.3559C380.859 17.3559 485.966 122.463 485.966 251.661C485.966 380.859 380.859 485.966 251.661 485.966C122.463 485.966 17.3559 380.859 17.3559 251.661Z"
        fill={color ? color : '#571C56'}
      />
      <path
        d="M251.661 34.7119C132.035 34.7119 34.7119 132.035 34.7119 251.661C34.7119 371.287 132.035 468.61 251.661 468.61C371.287 468.61 468.61 371.287 468.61 251.661C468.61 132.035 371.287 34.7119 251.661 34.7119ZM251.661 451.254C141.598 451.254 52.0678 361.724 52.0678 251.661C52.0678 141.598 141.598 52.0678 251.661 52.0678C361.724 52.0678 451.254 141.598 451.254 251.661C451.254 361.724 361.724 451.254 251.661 451.254Z"
        fill={color ? color : '#571C56'}
      />
      <path
        d="M355.797 190.915C352.915 190.915 350.104 191.184 347.327 191.575L347.127 191.219L340.619 192.885C340.532 192.911 340.454 192.946 340.367 192.972C337.165 193.814 334.058 194.881 331.082 196.218C330.952 196.278 330.83 196.348 330.7 196.4C327.784 197.727 324.981 199.246 322.334 201.008C322.265 201.051 322.187 201.095 322.126 201.138C319.679 202.778 317.388 204.626 315.21 206.596C314.767 206.996 314.325 207.386 313.891 207.794C311.877 209.72 309.986 211.777 308.25 213.964C307.877 214.433 307.538 214.919 307.174 215.396C305.447 217.704 303.833 220.091 302.444 222.633C302.418 222.685 302.384 222.737 302.358 222.798C300.96 225.375 299.806 228.1 298.782 230.886C298.6 231.381 298.409 231.875 298.236 232.379C297.316 235.112 296.595 237.932 296.066 240.822C295.971 241.36 295.901 241.907 295.814 242.454C295.363 245.465 295.051 248.52 295.051 251.661C295.051 254.802 295.363 257.857 295.823 260.877C295.91 261.424 295.971 261.962 296.075 262.508C296.595 265.398 297.324 268.219 298.244 270.952C298.409 271.455 298.609 271.941 298.791 272.436C299.806 275.222 300.969 277.947 302.366 280.524C302.392 280.576 302.427 280.628 302.453 280.689C303.842 283.231 305.456 285.618 307.174 287.918C307.53 288.395 307.877 288.881 308.25 289.358C309.986 291.545 311.869 293.602 313.891 295.528C314.325 295.936 314.767 296.327 315.21 296.726C317.397 298.696 319.679 300.544 322.135 302.184C322.204 302.228 322.274 302.271 322.343 302.314C324.99 304.067 327.793 305.586 330.709 306.922C330.839 306.983 330.96 307.052 331.09 307.105C334.067 308.441 337.165 309.508 340.367 310.35C340.454 310.376 340.532 310.411 340.619 310.437L347.127 312.103L347.327 311.747C350.104 312.138 352.915 312.407 355.797 312.407C389.285 312.407 416.542 285.149 416.542 251.661C416.542 218.173 389.285 190.915 355.797 190.915ZM347.119 251.661C347.119 265.364 344.133 278.962 338.449 291.38C336.28 290.426 334.214 289.289 332.253 288.013C331.55 287.562 330.917 287.041 330.24 286.546C328.825 285.505 327.463 284.394 326.179 283.197C325.589 282.65 325.007 282.095 324.46 281.522C323.003 279.986 321.649 278.354 320.416 276.628C320.2 276.315 319.939 276.046 319.722 275.725C318.342 273.668 317.18 271.464 316.164 269.182C315.878 268.531 315.652 267.845 315.392 267.177C314.715 265.416 314.142 263.602 313.7 261.736C313.517 260.99 313.327 260.244 313.188 259.48C312.728 256.937 312.407 254.334 312.407 251.661C312.407 248.988 312.728 246.385 313.196 243.842C313.335 243.079 313.526 242.332 313.708 241.586C314.151 239.72 314.724 237.906 315.401 236.145C315.661 235.477 315.887 234.791 316.173 234.14C317.188 231.858 318.351 229.654 319.731 227.597C319.939 227.285 320.208 227.007 320.425 226.695C321.649 224.959 323.003 223.327 324.469 221.8C325.024 221.219 325.606 220.672 326.187 220.125C327.463 218.919 328.825 217.817 330.249 216.776C330.917 216.29 331.559 215.769 332.262 215.309C334.232 214.033 336.288 212.897 338.458 211.942C344.133 224.36 347.119 237.959 347.119 251.661ZM355.797 295.051C355.753 295.051 355.718 295.042 355.675 295.042C361.394 281.331 364.475 266.57 364.475 251.661C364.475 236.752 361.394 221.991 355.675 208.28C355.718 208.28 355.753 208.271 355.797 208.271C379.722 208.271 399.186 227.736 399.186 251.661C399.186 275.586 379.722 295.051 355.797 295.051Z"
        fill={color ? color : '#571C56'}
      />
      <path
        d="M195.072 289.358C195.445 288.89 195.784 288.404 196.148 287.926C197.866 285.627 199.48 283.24 200.869 280.706C200.904 280.645 200.938 280.585 200.973 280.515C202.37 277.938 203.524 275.222 204.54 272.436C204.722 271.941 204.913 271.455 205.086 270.952C206.006 268.219 206.735 265.398 207.256 262.5C207.351 261.962 207.421 261.415 207.508 260.877C207.959 257.866 208.271 254.802 208.271 251.661C208.271 248.52 207.959 245.456 207.499 242.445C207.412 241.898 207.351 241.36 207.247 240.822C206.726 237.932 205.998 235.112 205.078 232.37C204.913 231.867 204.713 231.381 204.531 230.877C203.516 228.092 202.361 225.375 200.964 222.807C200.93 222.746 200.895 222.685 200.86 222.616C199.472 220.082 197.858 217.687 196.139 215.387C195.784 214.91 195.436 214.424 195.072 213.955C193.336 211.768 191.453 209.712 189.431 207.785C188.997 207.377 188.555 206.987 188.112 206.588C185.925 204.618 183.643 202.769 181.187 201.129C181.118 201.086 181.048 201.051 180.979 201.008C178.332 199.255 175.529 197.736 172.613 196.4C172.483 196.339 172.353 196.27 172.223 196.209C169.246 194.881 166.14 193.805 162.937 192.963C162.851 192.937 162.773 192.903 162.694 192.877L156.186 191.21L155.986 191.566C153.218 191.184 150.407 190.915 147.525 190.915C114.037 190.915 86.7797 218.173 86.7797 251.661C86.7797 285.149 114.037 312.407 147.525 312.407C150.407 312.407 153.218 312.138 155.995 311.747L156.195 312.103L162.703 310.437C162.79 310.411 162.868 310.376 162.955 310.35C166.157 309.508 169.264 308.441 172.232 307.105C172.362 307.044 172.492 306.974 172.622 306.914C175.538 305.586 178.341 304.059 180.988 302.306C181.057 302.262 181.126 302.228 181.187 302.184C183.643 300.544 185.925 298.696 188.112 296.726C188.555 296.327 188.997 295.936 189.431 295.528C191.445 293.602 193.336 291.545 195.072 289.358ZM190.126 259.48C189.987 260.244 189.796 260.99 189.614 261.736C189.171 263.602 188.598 265.416 187.921 267.177C187.661 267.845 187.435 268.531 187.149 269.182C186.134 271.464 184.971 273.668 183.591 275.725C183.383 276.037 183.114 276.315 182.897 276.628C181.673 278.363 180.319 279.995 178.853 281.522C178.297 282.103 177.716 282.65 177.135 283.197C175.859 284.403 174.497 285.505 173.073 286.546C172.405 287.032 171.763 287.553 171.06 288.013C169.09 289.289 167.033 290.426 164.864 291.38C159.189 278.962 156.203 265.364 156.203 251.661C156.203 237.959 159.189 224.36 164.873 211.942C167.042 212.897 169.108 214.033 171.069 215.309C171.772 215.76 172.405 216.281 173.082 216.776C174.497 217.817 175.859 218.928 177.143 220.125C177.733 220.672 178.315 221.227 178.862 221.8C180.319 223.336 181.673 224.968 182.905 226.695C183.122 227.007 183.383 227.276 183.6 227.597C184.98 229.654 186.142 231.858 187.158 234.14C187.444 234.791 187.67 235.477 187.93 236.145C188.607 237.906 189.18 239.72 189.622 241.586C189.804 242.332 189.995 243.079 190.134 243.842C190.594 246.385 190.915 248.988 190.915 251.661C190.915 254.334 190.594 256.937 190.126 259.48ZM104.136 251.661C104.136 227.736 123.6 208.271 147.525 208.271C147.569 208.271 147.604 208.28 147.647 208.28C141.928 221.991 138.847 236.752 138.847 251.661C138.847 266.57 141.928 281.331 147.647 295.042C147.604 295.042 147.569 295.051 147.525 295.051C123.6 295.051 104.136 275.586 104.136 251.661Z"
        fill={color ? color : '#571C56'}
      />
      <path
        d="M191.219 156.195L192.885 162.703C192.911 162.79 192.946 162.868 192.972 162.955C193.814 166.157 194.881 169.264 196.218 172.232C196.278 172.362 196.348 172.483 196.4 172.614C197.727 175.529 199.255 178.332 201.008 180.979C201.051 181.049 201.095 181.118 201.138 181.187C202.778 183.635 204.626 185.926 206.596 188.112C206.996 188.555 207.386 188.998 207.794 189.431C209.72 191.445 211.777 193.337 213.964 195.072C214.433 195.445 214.919 195.792 215.396 196.148C217.704 197.875 220.091 199.489 222.633 200.878C222.685 200.912 222.737 200.938 222.798 200.964C225.375 202.362 228.1 203.516 230.886 204.54C231.381 204.722 231.867 204.913 232.37 205.086C235.103 206.006 237.924 206.727 240.814 207.256C241.352 207.351 241.898 207.421 242.445 207.508C245.465 207.959 248.52 208.271 251.661 208.271C254.802 208.271 257.857 207.959 260.877 207.499C261.424 207.412 261.962 207.351 262.508 207.247C265.398 206.727 268.219 205.998 270.952 205.078C271.455 204.913 271.941 204.713 272.445 204.531C275.23 203.516 277.955 202.353 280.533 200.956C280.585 200.93 280.637 200.895 280.698 200.869C283.24 199.481 285.627 197.866 287.935 196.139C288.412 195.784 288.898 195.437 289.367 195.063C291.554 193.328 293.61 191.445 295.537 189.423C295.945 188.989 296.335 188.546 296.734 188.104C298.704 185.926 300.553 183.635 302.193 181.187C302.236 181.118 302.28 181.049 302.323 180.979C304.076 178.332 305.595 175.529 306.931 172.614C306.992 172.483 307.061 172.362 307.113 172.232C308.441 169.255 309.517 166.148 310.359 162.946C310.385 162.86 310.42 162.781 310.446 162.695L312.112 156.186L311.756 155.987C312.138 153.218 312.407 150.407 312.407 147.526C312.407 114.037 285.149 86.7798 251.661 86.7798C218.173 86.7798 190.915 114.037 190.915 147.526C190.915 150.407 191.184 153.218 191.575 155.995L191.219 156.195ZM288.013 171.069C287.562 171.772 287.041 172.405 286.546 173.073C285.505 174.488 284.394 175.85 283.197 177.135C282.65 177.716 282.095 178.306 281.522 178.853C279.986 180.311 278.354 181.665 276.628 182.897C276.315 183.114 276.046 183.374 275.725 183.591C273.668 184.971 271.464 186.134 269.182 187.149C268.531 187.436 267.845 187.661 267.177 187.921C265.416 188.598 263.602 189.171 261.736 189.614C260.99 189.796 260.244 189.987 259.48 190.126C256.937 190.594 254.334 190.915 251.661 190.915C248.988 190.915 246.385 190.594 243.842 190.126C243.079 189.987 242.332 189.796 241.586 189.614C239.72 189.171 237.906 188.598 236.145 187.921C235.477 187.661 234.8 187.436 234.14 187.149C231.858 186.134 229.654 184.971 227.597 183.591C227.285 183.383 227.007 183.114 226.695 182.897C224.959 181.673 223.327 180.311 221.8 178.853C221.219 178.298 220.672 177.716 220.125 177.135C218.928 175.859 217.817 174.497 216.776 173.073C216.29 172.405 215.769 171.763 215.309 171.069C214.033 169.099 212.888 167.042 211.942 164.873C236.77 153.505 266.544 153.505 291.38 164.873C290.426 167.042 289.289 169.108 288.013 171.069ZM251.661 104.136C275.586 104.136 295.051 123.6 295.051 147.526C295.051 147.578 295.034 147.63 295.034 147.682C267.568 136.383 235.746 136.383 208.289 147.682C208.289 147.63 208.271 147.578 208.271 147.526C208.271 123.6 227.736 104.136 251.661 104.136Z"
        fill={color ? color : '#571C56'}
      />
      <path
        d="M312.103 347.127L310.437 340.619C310.411 340.532 310.376 340.454 310.35 340.376C309.508 337.174 308.432 334.067 307.105 331.09C307.044 330.96 306.974 330.83 306.914 330.7C305.586 327.784 304.059 324.981 302.306 322.334C302.262 322.265 302.228 322.195 302.184 322.126C300.544 319.67 298.696 317.388 296.726 315.201C296.327 314.758 295.936 314.316 295.528 313.882C293.602 311.86 291.545 309.977 289.358 308.241C288.89 307.868 288.404 307.53 287.926 307.174C285.627 305.456 283.24 303.842 280.698 302.453C280.637 302.418 280.576 302.384 280.507 302.349C277.929 300.952 275.213 299.798 272.436 298.782C271.941 298.6 271.447 298.409 270.943 298.236C268.21 297.316 265.39 296.595 262.491 296.066C261.953 295.971 261.415 295.901 260.868 295.814C257.866 295.363 254.802 295.051 251.661 295.051C248.52 295.051 245.456 295.363 242.445 295.823C241.898 295.91 241.36 295.971 240.822 296.075C237.932 296.604 235.112 297.324 232.37 298.244C231.867 298.409 231.381 298.609 230.886 298.791C228.1 299.806 225.384 300.96 222.807 302.358C222.746 302.392 222.685 302.427 222.616 302.462C220.082 303.85 217.695 305.456 215.396 307.183C214.919 307.538 214.433 307.885 213.964 308.259C211.777 309.994 209.72 311.877 207.794 313.899C207.386 314.333 206.996 314.776 206.596 315.218C204.626 317.397 202.778 319.688 201.138 322.143C201.095 322.213 201.06 322.282 201.016 322.352C199.263 324.998 197.736 327.801 196.408 330.717C196.348 330.847 196.278 330.978 196.218 331.108C194.89 334.084 193.814 337.182 192.972 340.384C192.946 340.471 192.903 340.549 192.885 340.636L191.219 347.145L191.575 347.344C191.184 350.104 190.915 352.915 190.915 355.797C190.915 389.285 218.173 416.542 251.661 416.542C285.149 416.542 312.407 389.285 312.407 355.797C312.407 352.915 312.138 350.104 311.747 347.327L312.103 347.127ZM215.309 332.253C215.76 331.55 216.281 330.917 216.776 330.249C217.817 328.834 218.928 327.472 220.125 326.187C220.672 325.606 221.227 325.016 221.8 324.469C223.336 323.011 224.968 321.657 226.695 320.425C227.007 320.208 227.276 319.948 227.597 319.731C229.654 318.351 231.858 317.188 234.14 316.173C234.791 315.887 235.477 315.661 236.145 315.401C237.906 314.724 239.72 314.151 241.586 313.708C242.332 313.526 243.079 313.335 243.842 313.196C246.385 312.728 248.988 312.407 251.661 312.407C254.334 312.407 256.937 312.728 259.48 313.196C260.244 313.335 260.99 313.526 261.736 313.708C263.602 314.151 265.416 314.724 267.177 315.401C267.845 315.661 268.522 315.887 269.182 316.173C271.464 317.188 273.668 318.351 275.725 319.731C276.037 319.939 276.315 320.208 276.628 320.425C278.363 321.649 279.995 323.011 281.522 324.469C282.103 325.024 282.65 325.606 283.197 326.187C284.394 327.463 285.505 328.825 286.546 330.249C287.032 330.917 287.553 331.559 288.013 332.253C289.289 334.223 290.434 336.28 291.38 338.449C266.552 349.817 236.778 349.817 211.942 338.449C212.897 336.28 214.033 334.214 215.309 332.253ZM251.661 399.186C227.736 399.186 208.271 379.722 208.271 355.797C208.271 355.753 208.28 355.718 208.28 355.675C221.991 361.394 236.752 364.475 251.661 364.475C266.57 364.475 281.331 361.394 295.042 355.675C295.042 355.718 295.051 355.753 295.051 355.797C295.051 379.722 275.586 399.186 251.661 399.186Z"
        fill={color ? color : '#571C56'}
      />
    </svg>
  );
};

export default Film;
