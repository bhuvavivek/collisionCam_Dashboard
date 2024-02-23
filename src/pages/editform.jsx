import { Cities, States } from "assets/state-city";
import { Img, SelectBox, Text, TextArea } from "components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { toastOptions } from "utils";
import { api } from "utils/api";

const EditForm = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [imageSrc, setImageSrc] = useState("");
  const [image, setImage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const [videoSrc, setVideoSrc] = useState("");
  const [video, setVideo] = useState("");

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setVideo(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setVideoSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const getDetails = async () => {
    try {
      const { data } = await api.get(`/admin/footage/details-private/${id}`);

      console.log(data);
      setInputs(data?.result);
      setImageSrc(data?.result?.thumbnail);
      setVideoSrc(data?.result?.video);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  const validation = () => {
    if (!inputs.name) {
      ToastMessage("Name is Required");
      return false
    } else if (!inputs.price) {
      ToastMessage("Price is Required");
      return false
    } else if (!inputs.id) {
      ToastMessage("FootageID is Required");
      return false
    } else if (!inputs.state) {
      ToastMessage("State is Required");
      return false
    } else if (!inputs.id) {
      ToastMessage("City is Required");
      return false
    }
    return true;
  }

  const ToastMessage = (message) => {
    toast.warning(message, toastOptions);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle the form submission logic here

    if (validation()) {
      setIsLoading(true);
      try {
        const form = new FormData();
        form.append("photo", image);
        form.append("video", video);
        form.append("thumbnail", inputs?.thumbnail);
        form.append("thumbnailPublicKey", inputs?.thumbnailPublicKey);
        form.append("video", inputs?.video);
        form.append("videoPublicKey", inputs?.videoPublicKey);
        form.append("name", inputs.name);
        form.append("price", inputs.price);
        form.append("id", inputs.id);
        form.append("state", inputs.state);
        form.append("city", inputs.city);
        form.append("date", inputs.date);
        form.append("time", inputs.time);
        form.append("description", inputs.description);

        const { data } = await api.post("/admin/footage/edit/" + id, form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success(data?.message, toastOptions);
        navigate("/managefootageone");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(
          error?.response?.data?.message || "Internal server error",
          toastOptions
        );
        setIsLoading(false);
      }
    }

  };

  return (
    <div className="w-[30%] md:w-[90%] mx-auto mt-7 flex flex-col">
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
          <div className="flex w-full gap-7 md:gap-4 ">
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
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className="mt-1 p-2 border border-solid bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
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
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className="mt-1 p-2 border border-solid bg-[#fff] focus:border-[#D9D9D9] border-[#D9D9D9] rounded-lg w-full"
              />
            </div>
          </div>

          {/* State and city */}
          <div className="flex w-full sx:flex-wrap gap-7 sx:gap-3 md:gap-4 ">
            <div className="w-full">
              <label
                htmlFor="state"
                className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
              >
                State
              </label>
              <SelectBox
                className="border mt-1 p-2 border-gray-500_7f border-solid font-semibold text-left text-sm w-full"
                placeholderClassName="text-blue_gray-900_a2"
                isMulti={false}
                name="button"
                options={States}
                isSearchable={false}
                placeholder={inputs.state ? inputs.state : "Select State "}
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
                value={inputs.state}
                onChange={(selectedOption) => {
                  setInputs({ ...inputs, state: selectedOption, city: null });
                }}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="city"
                className="  text-base text-[#05202B] leading-6 font-medium Montserrat"
              >
                City
              </label>
              <SelectBox
                className="border mt-1 p-2 border-gray-500_7f border-solid font-semibold text-left text-sm w-full"
                placeholderClassName="text-blue_gray-900_a2"
                isMulti={false}
                name="button"
                options={Cities[inputs.state?.replace(/\s/g, "")]}
                isSearchable={false}
                placeholder={inputs.city ? inputs.city : "Select City "}
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
                value={inputs.city}
                onChange={(selectedOption) => {
                  setInputs({ ...inputs, city: selectedOption });
                }}
              />
            </div>
          </div>
          {/* Date  and time */}
          <div className="flex w-full sx:flex-wrap gap-7 sx:gap-3 md:gap-4 ">
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
            <div
              classname="flex w-full bg-red-500"
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Text className="font-lato  text-[#1976D2] font-bold w-auto md:text-sm ">
                Click to Edit Thumbnail Image
              </Text>
              <Text className="font-lato  text-[#1976D2] w-auto font-bold md:text-sm">
                Click to Edit Thumbnail video
              </Text>
            </div>

            <div className="flex ">
              {" "}
              <div className="w-[200px] relative h-[200px] flex justify-center items-center mx-auto border border-solid border-[#A5A5A5] bg-[#fff] ">
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

                {imageSrc && (
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#fff]">
                    <img
                      className="w-full h-full object-cover"
                      src={imageSrc}
                      alt=""
                    />
                  </div>
                )}

                <input
                  className="top-0 bottom-0 w-full h-full absolute"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="w-[200px] relative h-[200px] flex justify-center overflow-hidden items-center mx-auto border border-solid border-[#A5A5A5] bg-[#fff] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="43"
                  viewBox="0 0 51 43"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect
                      x="1.53125"
                      y="1.21875"
                      width="48.9375"
                      height="40.5625"
                      rx="7"
                      stroke="#05202B"
                      stroke-width="1.2"
                    />
                    <path
                      d="M21.1562 15.9375L33.2812 21.5312L21.1562 27.125V15.9375Z"
                      fill="#05202B"
                    />
                  </g>
                </svg>

                {videoSrc && (
                  <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-white-A700 ">
                    <video controls width="100%" height="100%" src={videoSrc} />
                  </div>
                )}

                <input
                  className="top-0 bottom-0 w-full h-full absolute"
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                />
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="flex justify-around my-7 gap-2">
            <button
              type="none"
              className="rounded-lg w-44 md:w-40 p-3 border-[#BF9853] border-2  text-center ">
              <Link
                to="/managefootageone"
                className="flex gap-4 items-center justify-center cursor-pointer "
              >
                {" "}
                <Img
                  className=" h-6  w-6"
                  src="/images/img_contrast.svg"
                  alt="contrast"
                />
                <Text className="text-[#BF9853] font-lato font-bold text-xl">
                  {" "}
                  Back{" "}
                </Text>
              </Link>
            </button>
            <button
              disabled={isLoading}
              type="submit"
              className="rounded-lg w-44 md:w-40 p-3 bg-[#BF9853] text-[#fff] font-lato font-bold text-base text-center disabled:bg-slate-500 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
