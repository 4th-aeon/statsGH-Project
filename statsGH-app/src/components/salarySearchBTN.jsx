import { Link } from "react-router-dom";

const SalarySearchBTN = () => {
  return (
    <div>
      <Link to="/">
        <button className="w-[170px] h-[35px] gap-3 justify-center items-center text-black font-goudos bg-[#ffdd00] rounded-[60px]  flex ">
          Salary Search
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.616252 1.04518C0.381913 1.27959 0.250269 1.59748 0.250269 1.92893C0.250269 2.26039 0.381913 2.57827 0.616252 2.81268L6.80375 9.00018L0.616252 15.1877C0.388555 15.4234 0.262562 15.7392 0.265409 16.0669C0.268257 16.3947 0.399718 16.7082 0.631478 16.94C0.863238 17.1717 1.17675 17.3032 1.5045 17.306C1.83225 17.3089 2.148 17.1829 2.38375 16.9552L9.455 9.88393C9.68934 9.64952 9.82098 9.33164 9.82098 9.00018C9.82098 8.66873 9.68934 8.35084 9.455 8.11643L2.38375 1.04518C2.14934 0.810843 1.83146 0.679199 1.5 0.679199C1.16855 0.679199 0.850661 0.810843 0.616252 1.04518Z"
              fill="black"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default SalarySearchBTN;
