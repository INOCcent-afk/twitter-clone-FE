import { useClickOutsideHook } from "@/hooks/useClickOutsideHook";
import { useScrollLock } from "@/hooks/useScrollLock";
import { PageMeta } from "@/shared-components/PageMeta";
import { Input } from "@/ui/Input";
import { Modal } from "@/ui/Modal";
import { TwitterOutlined } from "@ant-design/icons";
import React, { SyntheticEvent, useState } from "react";

export const LoginPage = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
  });

  const [isModalOpen, setModal] = useState(false);

  const handleForm = (e: SyntheticEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onEsc = (e: any) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };

  return (
    <>
      <PageMeta />
      <div className="grid grid-cols-12 h-screen w-full">
        <div
          className="relative bg-cover bg-center bg-no-repeat col-span-7 w-full"
          style={{ backgroundImage: "url('/images/login-bg.png')" }}
        >
          <TwitterOutlined className="relative left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-[400px]" />
        </div>
        <aside className="col-span-5">
          <TwitterOutlined />
          <h1 onClick={() => setModal(true)}>Happening now</h1>
          <h2>Join Twitter today.</h2>
        </aside>
      </div>
      {isModalOpen && (
        <Modal onKeyDown={onEsc} closeModal={() => setModal(false)}>
          <form className="p-5">
            <h2>Create your account</h2>
            <Input
              value={formData.name}
              onChange={(e) => handleForm(e)}
              maxLength={50}
              required
              placeholder="Name"
              id="name"
              name="name"
              countString
              type="text"
            />
            <Input
              value={formData.tel}
              onChange={(e) => handleForm(e)}
              required
              placeholder="Phone"
              id="phone"
              type="tel"
              name="tel"
            />
          </form>
        </Modal>
      )}
    </>
  );
};
