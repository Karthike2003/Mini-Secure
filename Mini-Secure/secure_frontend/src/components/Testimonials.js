import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
	<section
		id="clients"
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
	>
		<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

		<div className="mx-auto flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] lg:gap-20">
			<h2 className={styles.heading2}>
				Words of Wisdom, <br className="sm:block hidden" />on Justice.
			</h2>
			<div className="w-full md:mt-0 mt-6">
				<p className={`${styles.paragraph} text-left max-w-[450px]`}>

					Explore profound perspectives from influential figures, both global and Indian, highlighting the importance of integrity in justice and the preservation of secure evidence.
				</p>
			</div>
		</div>

		<div className="flex flex-col md:flex-row sm:justify-start justify-center mx-auto   feedback-container relative z-[1]">
			{feedback.map((card) => (
				<FeedbackCard key={card.id} {...card} />
			))}
		</div>
	</section>
);

export default Testimonials;
