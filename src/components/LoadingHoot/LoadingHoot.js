import { LoadingHootStyle } from './styles';

export default function LoadingHoot() {
  return (
    <LoadingHootStyle>
      <div className="loading-hoot__component">
          <svg
            class="hoot"
            width="78"
            height="54"
            viewBox="0 0 78 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.7168 36.2563L47.354 45.0967L38.5044 51.727L32.9734 41.7816L40.7168 36.2563Z"
              stroke="black"
              stroke-width="3"
              stroke-miterlimit="10"
            />
            <path
              d="M18.5929 24.101C21.6476 24.101 24.1239 21.6273 24.1239 18.5758C24.1239 15.5243 21.6476 13.0505 18.5929 13.0505C15.5383 13.0505 13.062 15.5243 13.062 18.5758C13.062 21.6273 15.5383 24.101 18.5929 24.101Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="1s"
                values="10,0;-10,0;10,0"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M18.5929 35.1514C27.7569 35.1514 35.1858 27.7302 35.1858 18.5757C35.1858 9.4212 27.7569 2 18.5929 2C9.42891 2 2 9.4212 2 18.5757C2 27.7302 9.42891 35.1514 18.5929 35.1514Z"
              stroke="black"
              stroke-width="4"
              stroke-miterlimit="10"
            />
            <path
              d="M58.4159 26.311C61.4706 26.311 63.9469 23.8372 63.9469 20.7857C63.9469 17.7342 61.4706 15.2605 58.4159 15.2605C55.3613 15.2605 52.8849 17.7342 52.8849 20.7857C52.8849 23.8372 55.3613 26.311 58.4159 26.311Z"
              fill="black"
              stroke="black"
              stroke-miterlimit="10"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="1s"
                values="10,0;-10,0;10,0"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M58.4159 37.3614C67.5799 37.3614 75.0089 29.9402 75.0089 20.7857C75.0089 11.6312 67.5799 4.20996 58.4159 4.20996C49.2519 4.20996 41.823 11.6312 41.823 20.7857C41.823 29.9402 49.2519 37.3614 58.4159 37.3614Z"
              stroke="black"
              stroke-width="4"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
    </LoadingHootStyle>
  );
}
