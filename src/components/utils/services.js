import service_one from "../assets/services/service-1.jpg";
import service_three from "../assets/services/service-3.jpg";
import service_four from "../assets/services/service-4.jpg";
import service_two from "../assets/services/service-5.jpg";
import service_five from "../assets/services/service-6.jpg";

export const services = [
    {
        id: 1,
        title: "Manicure",
        imageUrl: service_one,
        description: "Experience the best care for your hands with our expert manicure services, ensuring smooth and healthy nails.",
        notes: `The Art of Manicure
        Every hand tells a story. It speaks of your journey and the path you've traveled. Our manicure service not only ensures that your hands look pristine, but they feel amazing as well. 

        Benefits and Techniques
        The intricacies of nail care go beyond just looking beautiful. A proper manicure can prevent rough edges, hangnails, and also prevent nail biting. Our specialists utilize a mix of moisturizing treatments, precision shaping, and expert polish application techniques.

        Our Offerings
        Beyond the basic manicure, we also offer gel, acrylic, and French manicures, each designed to fit your specific style and need.`,
        face: { duration: "1 hr", price: "$50" },
        massage: { duration: "2 hr", price: "$35" },
    },
    {
        id: 2,
        title: "Pedicure",
        imageUrl: service_two,
        description: "Relax as we pamper your feet, exfoliating dead skin and providing the utmost care for your toenails.",
        notes: `Pedicure Perfection
        In the hustle and bustle of daily life, our feet often get neglected. Yet, they are our pillars. Through our pedicure services, we give them the royal treatment they deserve.

        Essential Foot Care
        Our treatments help in removing dead skin, softening hard skin and shaping and treating the nails. Regular foot treatments prevent nail diseases and foot problems.

        Luxury Offerings
        Dive deep into relaxation with our spa pedicure, which includes a foot soak, exfoliation, and a rejuvenating foot mask.`,
        face: { duration: "1 hr", price: "$35" },
        massage: { duration: "2 hr", price: "$35" },
    },
    {
        id: 3,
        title: "Massage",
        imageUrl: service_three,
        description: "Melt away stress and muscle tension with our specialized massage techniques tailored for your needs.",
        notes: `Healing Through Touch
        The human touch has an incredible power of healing. Our massage services are designed to offer you a sanctuary of relaxation, where the world outside melts away.

        Holistic Approach
        Our therapies are not just about techniques, but also about ensuring a holistic experience. From selecting the right aromatic oils to providing the right pressure, everything is curated for you.

        Diverse Selection
        From Swedish to Thai, from deep tissue to hot stone, we have a range of massage therapies that cater to diverse needs.`,
        face: { duration: "1 hr", price: "$35" },
        massage: { duration: "2 hr", price: "$35" }
    },
    {
        id: 4,
        title: "Skin Care",
        imageUrl: service_four,
        description: "Achieve radiant and youthful skin with our range of facials and treatments, curated for all skin types.",
        notes: `Skin: Your Body's Canvas
        The skin, your body's largest organ, is a marvel. It protects, beautifies, and often reflects your inner health. Our skin care treatments aim to rejuvenate and nourish it.

        Beyond Surface Beauty
        Our treatments go beyond the surface. We delve deep into skin's layers, ensuring hydration, tackling problems, and ensuring a radiant glow.

        Tailored Regimens
        Every individual is unique, and so is their skin. Our experts assess your skin type and provide treatments that are specially curated for you.`,
        face: { duration: "1 hr", price: "$35" },
        massage: { duration: "2 hr", price: "$35" }
    },
    {
        id: 5,
        title: "Body Care",
        imageUrl: service_five,
        description: "Indulge in full-body treatments designed to rejuvenate and refresh, leaving you feeling revitalized.",
        notes: `Body Care: Total Nourishment
        The body, a temple of complexities, requires care that is thorough and revitalizing. Our treatments offer the luxury your body needs.

        From Top to Toe
        Our treatments cater to every part of your body, ensuring total rejuvenation. From scrubs that exfoliate to wraps that nourish, we've got it all.

        The Ultimate Experience
        Step into our world of body care and let us pamper you, ensuring that when you step out, you feel like a renewed version of yourself.`,
        face: { duration: "1 hr", price: "$25" },
        massage: { duration: "1 hr", price: "$37" }
    },
];