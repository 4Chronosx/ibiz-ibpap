import { PlusIcon } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import React from "react";
import ProfilePic from "../../assets/page_profile/profile-pic.png";
import ProfilePost from "../../assets/page_bodies/pic-post.png";
import DiscussionIcon from "../../assets/page_bodies/discussion-icon.png";
import QuestionIcon from "../../assets/page_bodies/question-icon.png";
import SurveyIcon from "../../assets/page_bodies/survey-icon.png";
import Reactions from "../../assets/page_bodies/reactions.png";
import { ThumbsUp } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share } from "lucide-react";

export const CommunityPageBody = () => {
    return(
        <div>

        </div>
    );
}

const PageBody = ({ children, title, pageName}) => {
    return(
        <div className="bg-primary-white border border-stroke-300 p-4 rounded-xl w-[700px]">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{pageName}</h1>
                <div>
                    <button>
                        <PlusIcon />
                    </button>
                </div>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default PageBody;