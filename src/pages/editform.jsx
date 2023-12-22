import { Text, TextArea } from "components";
import { useState } from "react";

const EditForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted with name:");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="w-[30%] mx-auto mt-7 flex flex-col">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h2 className="text-center text-[#052029] text-2xl font-semibold Montserrat">
          Edit New Footage
        </h2>

        <div className="flex flex-col gap-3 mt-5">
          {/* name */}
          <div>
            <label
              htmlFor="name"
              className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-solid bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
            />
          </div>
          {/* price and id */}
          <div className="flex w-full gap-7 ">
            <div className="w-full">
              <label
                htmlFor="price"
                className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={inputs.price}
                onChange={handleChange}
                className="mt-1 p-2 border border-solid   bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="id"
                className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
              >
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={inputs.id}
                onChange={handleChange}
                className="mt-1 p-2 border border-solid bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
              />
            </div>
          </div>

          {/* State and city */}
          <div className="flex w-full gap-7 ">
            <div className="w-full">
              <label
                htmlFor="state"
                className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={inputs.state}
                onChange={handleChange}
                className="mt-1 p-2 border border-solid   bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="city"
                className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={inputs.city}
                onChange={handleChange}
                className="mt-1 p-2 border border-solid bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
              />
            </div>
          </div>
          {/* Date  and time */}
          <div className="flex w-full gap-7 ">
            <div className="w-full">
              <label
                htmlFor="date"
                className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={inputs.date}
                onChange={handleChange}
                className="mt-1 p-2 border border-solid   bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="time"
                className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                placeholder=""
                value={inputs.time}
                onChange={handleChange}
                className="mt-1 p-2 border border-solid bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
              />
            </div>
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
            >
              Description
            </label>
            <TextArea
              id="description"
              name="description"
              value={inputs.description}
              onChange={handleChange}
              placeholder="Write a message"
              className="mt-1 p-2 border border-solid bg-[#fff] focus:border-[#D9D9D9] h-28 border-[#D9D9D9] rounded-lg w-full placeholder:font-lato placeholder:font-normal placeholder:text-base"
            />
          </div>
          {/* upload image */}
          <div className="flex flex-col gap-5">
            <Text className="font-lato text-base text-[#1976D2] font-bold text-center">
              Click to Edit Thumbnail Image
            </Text>
            <div className="w-[200px] h-[200px] flex justify-center items-center mx-auto border border-solid border-[#A5A5A5] bg-[#fff] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none"
              >
                <g opacity="0.7">
                  <path
                    d="M47.9375 9.21875H11.0625C8.00767 9.21875 5.53125 11.6952 5.53125 14.75V44.25C5.53125 47.3048 8.00767 49.7812 11.0625 49.7812H47.9375C50.9923 49.7812 53.4688 47.3048 53.4688 44.25V14.75C53.4688 11.6952 50.9923 9.21875 47.9375 9.21875Z"
                    stroke="#05202B"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.7188 23.9688C40.7553 23.9688 42.4062 22.3178 42.4062 20.2812C42.4062 18.2447 40.7553 16.5938 38.7188 16.5938C36.6822 16.5938 35.0312 18.2447 35.0312 20.2812C35.0312 22.3178 36.6822 23.9688 38.7188 23.9688Z"
                    stroke="#05202B"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M35.0312 38.6946L24.5841 28.267C23.9193 27.6024 23.0258 27.2167 22.0862 27.1889C21.1465 27.161 20.2317 27.4931 19.5288 28.1172L5.53125 40.5625M25.8125 49.7813L40.0255 35.5683C40.6755 34.917 41.5455 34.5322 42.4647 34.4896C43.3839 34.4469 44.2858 34.7495 44.9933 35.3378L53.4688 42.4063"
                    stroke="#05202B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          {/* Button */}
          <div className="flex justify-center my-7">
            <button
              type="submit"
              className="rounded-lg w-44 p-3 bg-[#29207E] text-[#fff] font-lato font-bold text-base text-center  "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
