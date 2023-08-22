import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Nike만의
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            독보적인
          </span>
          <span className="text-coral-red inline-block mt-3">퀄리티</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          최고의 편안함과 스타일을 보장하는 나이키의 세심한 신경은 사용자의
          만족도를 향상시켜 비교할 수 없는 품질, 혁신 및 뛰어남을 입증할 수
          있습니다.
        </p>
        <div className="mt-11">
          <Button label="더 알아보기" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
