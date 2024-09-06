import { AccountCircle } from "@mui/icons-material";

export const Header = () => {
  return (
    <div className="w-[100%] h-20 border">
      <div className="flex items-center justify-between h-full px-6">
        <div className="text-2xl font-bold text-[#C39504] m-5">mAI Court</div>
        <div className="flex space-x-6">
          <div className="text-gray-600 font-bold hover:text-[#C39504] cursor-pointer">
            Legal Aid
          </div>
          <div className="text-gray-600 font-bold hover:text-[#C39504] cursor-pointer">
            Partners
          </div>
          <div className="text-gray-600 font-bold hover:text-[#C39504] cursor-pointer">
            Resourses
          </div>
          <div className="text-gray-600 font-bold hover:text-[#C39504] cursor-pointer">
            Blog
          </div>
          <div className="text-gray-600 font-bold hover:text-[#C39504] cursor-pointer">
            About Us
          </div>
          <div>
            <button className="bg-[#C39504] text-white font-bold py-1 px-4 rounded hover:bg-[#a37f04] transition-all duration-300 cursor-pointer">
              Premium Services
            </button>
          </div>

          <div>
            {" "}
            <AccountCircle
              className="text-gray-600 cursor-pointer"
              fontSize="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
