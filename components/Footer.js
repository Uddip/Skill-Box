import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 border-2">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Company</h5>
        <p className="cursor-pointer hover:underline">About</p>
        <p className="cursor-pointer hover:underline">Careers</p>
        <p className="cursor-pointer hover:underline">Newsroom</p>
        <p className="cursor-pointer hover:underline">Blog</p>
        <p className="cursor-pointer hover:underline">Investors</p>
        <p className="cursor-pointer hover:underline">Partners</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer hover:underline">SkillBox Plus</p>
        <p className="cursor-pointer hover:underline">Team Plans</p>
        <p className="cursor-pointer hover:underline">Refer a Friend</p>
        <p className="cursor-pointer hover:underline">Free Classes</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Sharing</h5>
        <p className="cursor-pointer hover:underline">Share Skills</p>
        <p className="cursor-pointer hover:underline">Sharing Handbook</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer hover:underline">Help Centre</p>
        <p className="cursor-pointer hover:underline">Cancellation options</p>
        <p className="cursor-pointer hover:underline">Trust & Safety</p>
      </div>
    </div>
  );
}

export default Footer;
