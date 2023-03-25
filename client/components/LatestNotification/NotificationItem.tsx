import { FC } from "react";
import { INotificationsItem } from "@/interfaces/other/INotificationsItem";
import classNames from "classnames";
import Avatar from "../Avatar";

const created = "بإنشاء";
const updated = "بتعديل";
const studentDid = "قامت الطالبة";
const newPost = "منشور جديد";
const updatePost = "منشور سابق";

const NotificationItem: FC<INotificationsItem> = ({
  image,
  username,
  status,
  type,
  date,
  postId,
}) => {
  return (
    <div
      className={classNames(
        "flex justify-between items-center rounded-md p-1 px-12 shadow-light dark:shadow-dark bg-white dark:bg-secondary-dark",
        { "opacity-[0.7]": !status }
      )}
    >
      <div className="flex gap-4 items-center">
        <Avatar
          image={image}
          alt={`${username} image`}
          width={50}
          height={50}
          className="w-10 h-10"
        />
        <p className="text-secondary-dark dark:text-secondary-light">
          {studentDid} {username} {type === "create" ? created : updated}{" "}
          {type === "create" ? newPost : updatePost}
        </p>
      </div>
      <div className="flex items-center gap-3 justify-center">
        <label className="text-secondary-dark dark:text-secondary-light">
          {date}
        </label>
        {status && (
          <span className="bg-danger w-[0.5rem] h-[0.5rem] rounded-full flex" />
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
