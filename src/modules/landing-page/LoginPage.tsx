import { PageMeta } from "@/shared-components/PageMeta";
import { Button } from "@/ui/ Button";
import { Input } from "@/ui/Input";
import Modal from "react-modal";
import { TwitterOutlined } from "@ant-design/icons";

import Link from "next/link";
import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

export const LoginPage = () => {
  const router = useRouter();

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
        <aside className="col-span-5 pl-5 flex flex-col justify-center items-start">
          <TwitterOutlined />
          <h1>Happening now</h1>
          <h2>Join Twitter today.</h2>
          <Link href="/?flow=loginPage" as="/flow/loginPage">
            <Button role="link">Login</Button>
          </Link>
        </aside>
      </div>
      <Modal
        isOpen={!!router.query.flow}
        onRequestClose={() => router.push("/")}
        contentLabel="login modal"
        className="w-full max-w-[400px] bg-black absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white rounded-md"
      >
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
    </>
  );
};
