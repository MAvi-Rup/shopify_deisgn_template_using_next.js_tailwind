const IconWithBadge = ({ badgeContent }) => (
  <div className="relative mr-4 p-2">
    <div className="relative">
      <svg
        width="24"
        height="17"
        viewBox="0 0 14 13"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.7441 2.26562C11.9993 2.52083 12.1908 2.8125 12.3184 3.14062C12.446 3.45964 12.5098 3.78776 12.5098 4.125C12.5098 4.46224 12.446 4.79492 12.3184 5.12305C12.1908 5.44206 11.9993 5.72917 11.7441 5.98438L7 10.7285L2.25586 5.98438C2.00065 5.72917 1.80924 5.44206 1.68164 5.12305C1.55404 4.79492 1.49023 4.46224 1.49023 4.125C1.49023 3.78776 1.55404 3.45964 1.68164 3.14062C1.80924 2.8125 2.00065 2.52083 2.25586 2.26562C2.51107 2.01042 2.79818 1.81901 3.11719 1.69141C3.44531 1.5638 3.77799 1.5 4.11523 1.5C4.45247 1.5 4.7806 1.5638 5.09961 1.69141C5.41862 1.81901 5.71029 2.01042 5.97461 2.26562L6.58984 2.88086C6.69922 2.99935 6.83594 3.05859 7 3.05859C7.16406 3.05859 7.30078 2.99935 7.41016 2.88086L8.02539 2.26562C8.28971 2.01042 8.58138 1.81901 8.90039 1.69141C9.2194 1.5638 9.54753 1.5 9.88477 1.5C10.222 1.5 10.5501 1.5638 10.8691 1.69141C11.1973 1.81901 11.4889 2.01042 11.7441 2.26562ZM12.5645 1.44531C12.1999 1.07161 11.7806 0.79362 11.3066 0.611328C10.8418 0.429036 10.3678 0.337891 9.88477 0.337891C9.40169 0.337891 8.92773 0.429036 8.46289 0.611328C7.99805 0.79362 7.57878 1.07161 7.20508 1.44531L7 1.65039L6.79492 1.44531C6.42122 1.07161 6.00195 0.79362 5.53711 0.611328C5.07227 0.429036 4.59831 0.337891 4.11523 0.337891C3.63216 0.337891 3.15365 0.429036 2.67969 0.611328C2.21484 0.79362 1.80013 1.07161 1.43555 1.44531C1.06185 1.8099 0.779297 2.22917 0.587891 2.70312C0.405599 3.16797 0.314453 3.64193 0.314453 4.125C0.314453 4.60807 0.405599 5.08659 0.587891 5.56055C0.779297 6.02539 1.06185 6.4401 1.43555 6.80469L6.58984 11.959C6.69922 12.0775 6.83594 12.1367 7 12.1367C7.16406 12.1367 7.30078 12.0775 7.41016 11.959L12.5645 6.80469C12.9382 6.4401 13.2161 6.02539 13.3984 5.56055C13.5898 5.08659 13.6855 4.60807 13.6855 4.125C13.6855 3.64193 13.5898 3.16797 13.3984 2.70312C13.2161 2.23828 12.9382 1.81901 12.5645 1.44531Z"></path>
      </svg>
      <div className="absolute top-0 -right-4 transform -translate-x-2/3 -translate-y-1/2">
        <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          0
        </p>
      </div>
    </div>
  </div>
);
export default IconWithBadge;
