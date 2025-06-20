import style from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const deleteToast = (name) => toast(`Contact "${name}" has been deleted`, {style: {
  background: 'lightyellow',
  textAlign: 'center',
}});

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {dispatch(deleteContact(id));
    deleteToast(name);
  }


  return (
    <div className={style.contactCard}>
      <div className={style.contactWrap}>
        <div className={style.contactString}>
          <FaUser className={style.icon} size={16} />
          <p>{name}</p>
        </div>
        <div className={style.contactString}>
          <FaPhone className={style.icon} size={16} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
