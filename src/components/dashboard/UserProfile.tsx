import { User } from "lucide-react";


const UserProfile = () => {
    return (
        <div>
             <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded flex items-center justify-center">
                <span className="text-xs font-bold"> <User/> </span>
              </div>
              <span className="text-xs font-semibold">BY JOHN1</span>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
    );
};

export default UserProfile;