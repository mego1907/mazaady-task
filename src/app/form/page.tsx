import { Form } from "@/components";
import {
  CustomButton,
  CustomInput,
  CustomSelectbox,
  CustomTitle,
} from "@/components/custom";
import { instance } from "@/network/axiosConfig";

async function getData() {
  const res = await instance.get("get_all_cats");

  return res.data.data;
}

async function page() {
  const { categories } = await getData();

  return (
    <div className="my-12">
      <div className="wrapper">
        <Form categories={categories} />
      </div>
    </div>
  );
}

export default page;
