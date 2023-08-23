import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Nike만의
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            특별한
          </span>
          <span className="text-coral-red inline-block mt-3">제안</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          놀라운 절감 효과를 경험하여 당신의 기대치를 충족시켜줄 Special Offer
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="구매하러 가기" iconUrl={arrowRight} />
          <Button
            label="자세히 알아보기"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
