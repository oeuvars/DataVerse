import star from "../assets/icons/star.svg";

const Stars = () => {
   return (
      <div class="flex gap-1 h-5">
         <img src={star} alt="star" class="w-6 h-6"/>
         <img src={star} alt="star" class="w-6 h-6"/>
         <img src={star} alt="star" class="w-6 h-6"/>
         <img src={star} alt="star" class="w-6 h-6"/>
         <img src={star} alt="star" class="w-6 h-6"/>
      </div>
   )
}

export default Stars
