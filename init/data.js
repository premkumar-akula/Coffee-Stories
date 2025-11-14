const sampleItems = [
    {
        title: "Cozy Coffee Corner",
        description:
            "A warm and inviting coffee shop serving freshly brewed artisanal coffee and delicious pastries in a rustic setting.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price:1000,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Urban Espresso Bar",
        description:
            "A trendy espresso bar known for its perfectly pulled shots and modern industrial vibes.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price : 1600,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Parisian Café Elegance",
        description:
            "Step into a Parisian dream with exquisite lattes, buttery croissants, and an atmosphere straight from the streets of Paris.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1800,
        location: "Paris",
        country: "France",
    },
    {
        title: "Seaside Coffee Escape",
        description:
            "Sip on rich cappuccinos while soaking up ocean views at this serene beachfront coffee haven.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1200,
        location: "Bondi Beach",
        country: "Australia",
    },
    {
        title: "Artisan Roastery Experience",
        description:
            "Witness the art of coffee roasting in this specialty café, offering single-origin beans and pour-over perfection.",
        image: {
            filename: "coffeeshopimage",
            url: "https://plus.unsplash.com/premium_photo-1695750679584-b8e21965ef0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 800,
        location: "Cape Town",
        country: "South Africa",
    },
    {
        title: "Hidden Alley Espresso Bar",
        description:
            "Discover this hidden gem tucked away in a charming alley, offering bold espresso and creative latte art.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1900,
        location: "Kyoto",
        country: "Japan",
    },
    {
        title: "Greenhouse Coffee Retreat",
        description:
            "Relax in a lush, plant-filled café offering organic coffee blends and fresh vegan treats.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price:2000,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Midnight Brew Café",
        description:
            "Open 24/7, this cozy spot serves up gourmet coffee and decadent desserts, perfect for night owls.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 2500,
        location: "Seoul",
        country: "South Korea",
    },
    {
        title: "Rooftop Coffee Haven",
        description:
            "Enjoy panoramic city views with your espresso at this rooftop café, ideal for sunsets and selfies.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1646294567230-b56cb0cd1f5b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price:1100,
        location: "Dubai",
        country: "United Arab Emirates",
    },
    {
        title: "Vintage Coffee Caravan",
        description:
            "Step back in time at this retro coffee caravan, serving espresso drinks and homemade baked goods.",
        image: {
            filename: "coffeeshopimage",
            url: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1300,
        location: "Auckland",
        country: "New Zealand",
    },
        {
            title: "Spicy Peri-Peri Chicken Pizza",
            description: "A fiery combination of Peri-Peri chicken, bell peppers, and melted cheese.",
            image: {
                filename: "coffeeshopimage",
                url: "https://images.unsplash.com/photo-1604917869287-3ae73c77e227?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            price: 1350,
            location: "Cape Town",
            country: "South Africa"
        },
        {
            title: "Tandoori Chicken Pizza",
            description: "Tandoori-spiced chicken, onions, and bell peppers on a traditional pizza crust.",
            image: {
                filename: "coffeeshopimage",
                url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            price: 1300,
            location: "Mumbai",
            country: "India"
        },
        {
            title: "Garlic Parmesan Chicken Pizza",
            description: "A rich and creamy pizza with garlic parmesan sauce, grilled chicken, and herbs.",
            image: {
                filename: "coffeeshopimage",
                url: "https://plus.unsplash.com/premium_photo-1667682942148-a0c98d1d70db?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            price: 1350,
            location: "Paris",
            country: "France"
        },
        {
            title: "Teriyaki Chicken Pizza",
            description: "Sweet and savory teriyaki chicken paired with fresh pineapple and mozzarella cheese.",
            image: {
                filename: "coffeeshopimage",
                url: "https://images.unsplash.com/photo-1585505008861-a5c378857dcc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            price: 1400,
            location: "Tokyo",
            country: "Japan"
        }
];
module.exports = { data: sampleItems};