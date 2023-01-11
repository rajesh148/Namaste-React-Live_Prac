import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo (title)
 *  -NavItems [Right side]
 *  -Cart
 * Body
 *  -Search bar
 *  -RestaurantList
 *    -RestaurantCards [many cards]
 *      -Images
 *      -Name
 *      -Rating
 *      -Cusines
 * Footer
 *  -links
 *  -copyright
 */

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Config Driven UI
const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "30% off",
      },
      {
        offerName: "No delivery fee",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "SSS Idle",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/weufsah9zwqtyvmfecw1",
        cusines: ["South Indian", "Tiffin"],
        rating: "4.2",
      },
      {
        name: "Cake zone",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/weufsah9zwqtyvmfecw1",
        cusines: ["South Indian", "Tiffin"],
        rating: "4.2",
      },
      {
        name: "Taste of Wonder",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/weufsah9zwqtyvmfecw1",
        cusines: ["South Indian", "Tiffin"],
        rating: "4.2",
      },
    ],
  },
];

const restaurantList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "582340",
        name: "Savenature Nutri Food Products LLP",
        uuid: "d3497459-8d95-4f6a-b3c9-e90f7ca320ea",
        city: "38",
        area: "Benz Circle and Auto Nagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "czvmt7tv3vvmsi7nly2v",
        cuisines: ["Indian"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        slaString: "26 MINS",
        lastMileTravel: 2.299999952316284,
        slugs: {
          restaurant:
            "savenature-nutri-food-products-llp-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          city: "vijayawada",
        },
        cityState: "38",
        address:
          "58-4-11/3, Oppsite merys stella indoor auditorium, Pulla Rao street, Patamata, Vijayawada, Vijayawada (Urban), Krishna, Andhra Pradesh, 520010",
        locality: "Patamata",
        parentId: 348605,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "582340",
          deliveryTime: 26,
          minDeliveryTime: 26,
          maxDeliveryTime: 26,
          lastMileTravel: 2.299999952316284,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "219952",
        name: "Food Time",
        uuid: "3000d448-df9c-4451-b769-f26ec52d8b7c",
        city: "38",
        area: "KRISHNALANKA",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "xttpdalmf9cmrlmexdsi",
        cuisines: [
          "Beverages",
          "Chinese",
          "Chaat",
          "Continental",
          "Desserts",
          "South Indian",
          "Pizzas",
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: "30 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant:
            "food-time-gollapudi-and-bhavanipuram-gollapudi-and-bhavanipuram",
          city: "vijayawada",
        },
        cityState: "38",
        address:
          "D.NO.61-3/3-23,NELAKUDITI VENKATESWARA RAO GARI STREET,BALAJI NAGAR 4TH LINE,VIJAYAWADA",
        locality: "Gollapudi and Bhavanipuram",
        parentId: 82063,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "219952",
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "87346",
        name: "Sri Balaji Fast Foods",
        uuid: "1d057e41-19f6-47f9-8b83-2893ce6e7a80",
        city: "38",
        area: "Governor Peta",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "lr4ryzp2d0hfrivahvqq",
        cuisines: ["Andhra", "South Indian", "Chinese", "Juices"],
        tags: [],
        costForTwo: 10000,
        costForTwoString: "₹100 FOR TWO",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        slaString: "22 MINS",
        lastMileTravel: 2.4000000953674316,
        slugs: {
          restaurant: "sri-balaji-fast-foods-suryaraopeta-governorpet",
          city: "vijayawada",
        },
        cityState: "38",
        address: "29-6-33 Rama Chandra Rao Road,Suraraipeta",
        locality: "Suraraipeta",
        parentId: 13969,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "87346",
          deliveryTime: 22,
          minDeliveryTime: 22,
          maxDeliveryTime: 22,
          lastMileTravel: 2.4000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "491918",
        name: "UTUBE RESTAURANT",
        uuid: "5470e52d-95ea-4e39-bcc5-ae1c5f3736e6",
        city: "38",
        area: "KRISHNALANKA",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "iywzqhhxg55qsu8kb8ae",
        cuisines: [
          "South Indian",
          "Fast Food",
          "Italian",
          "Chinese",
          "Biryani",
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant:
            "utube-restaurant-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          city: "vijayawada",
        },
        cityState: "38",
        address:
          "D.NO.61-3/3-23,NELAKUDITI VENKATESWARA RAO GARI STREET,BALAJI NAGAR 4TH LINE,VIJAYAWADA",
        locality: "Benz Circle and Auto Nagar",
        parentId: 297448,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "491918",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "2.5",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "370740",
        name: "Havmor ice creams and cakes",
        uuid: "12a4b970-ee41-444b-8077-7d7000aaa8e9",
        city: "38",
        area: "Benz Circle",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "e2p1nnwhr4pz0llkuoqm",
        cuisines: ["Ice Cream"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        slaString: "26 MINS",
        lastMileTravel: 2.9000000953674316,
        slugs: {
          restaurant:
            "havmor-ice-creams-and-cakes-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          city: "vijayawada",
        },
        cityState: "38",
        address:
          "Muppavarapu Complex, Opposite Auto Nagar Gate, Nethaji Road, New Rtc Colony, Benz Circle, Kishore Nagar, Vijayawada, Andhra Pradesh, 520007",
        locality: "Kishore Nagar",
        parentId: 94586,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.9 kms",
        hasSurge: false,
        sla: {
          restaurantId: "370740",
          deliveryTime: 26,
          minDeliveryTime: 26,
          maxDeliveryTime: 26,
          lastMileTravel: 2.9000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.6",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "585642",
        name: "KL foods",
        uuid: "45c92835-6044-4869-a2fe-8d659fcb46a0",
        city: "38",
        area: "Governorpet",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "s8hakkuteydwin9y3lbd",
        cuisines: ["Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        slaString: "30 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "kl-foods-governorpet-governorpet",
          city: "vijayawada",
        },
        cityState: "38",
        address: "Vijayawada, machavarm  beside modern mart road second right",
        locality: "Modern Mart Road",
        parentId: 350449,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        hasSurge: false,
        sla: {
          restaurantId: "585642",
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 30,
          lastMileTravel: 0,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "658495",
        name: "30 Rupees Veg Biryanis & 20 Rupees Tiffins",
        uuid: "65091e7e-e5a0-4d4b-9be1-54330021c1fd",
        city: "38",
        area: "Governorpet",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "d390a6c080d7fa9a3a89f48100ca20b1",
        cuisines: ["Biryani", "South Indian"],
        tags: [],
        costForTwo: 10000,
        costForTwoString: "₹100 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 2.799999952316284,
        slugs: {
          restaurant:
            "30-rupees-veg-biryanis-&-20-rupees-tiffins-governorpet-governorpet",
          city: "vijayawada",
        },
        cityState: "38",
        address:
          "Door No: 201, Block A, KP Towers,  Seetarampuram, Vijayawada (Urban),  Krishna, Andhra Pradesh - 520002",
        locality: "Seetarampuram",
        parentId: 395598,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "658495",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 2.799999952316284,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: true,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "120864",
        name: "NR Tiffin Center",
        uuid: "21a22c3c-5813-47ef-98a9-105e9793df9e",
        city: "38",
        area: "NRP Road, Gandhinagar",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "nzq7mftdaaejuytfhbsr",
        cuisines: ["South Indian", "Andhra"],
        tags: [],
        costForTwo: 10000,
        costForTwoString: "₹100 FOR TWO",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        slaString: "22 MINS",
        lastMileTravel: 3.5,
        slugs: {
          restaurant: "nr-tiffin-center-gandhi-nagar-governorpet",
          city: "vijayawada",
        },
        cityState: "38",
        address: "26-3-18, NRP Road, Gandhinagar",
        locality: "NRP Road, Gandhinagar",
        parentId: 13787,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "120864",
          deliveryTime: 22,
          minDeliveryTime: 22,
          maxDeliveryTime: 22,
          lastMileTravel: 3.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "655984",
        name: "Gouse Shawarma",
        uuid: "0aa596ac-18fe-413b-9575-24583c6052be",
        city: "38",
        area: "Governorpet",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "fa4a8427cd2e49045fde25dca037dcd9",
        cuisines: ["Snacks"],
        tags: [],
        costForTwo: 11000,
        costForTwoString: "₹110 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        slaString: "39 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant: "gouse-shawarma-governorpet-governorpet-2",
          city: "vijayawada",
        },
        cityState: "38",
        address:
          "BRTS Rd, Lakshmi Nagar, Satyaranayana Puram, Vijayawada, Andhra Pradesh, India",
        locality: "Lakshmi nagar",
        parentId: 394224,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "655984",
          deliveryTime: 39,
          minDeliveryTime: 39,
          maxDeliveryTime: 39,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: true,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "417990",
        name: "Karim Hotel",
        uuid: "d5295d0f-2465-4850-a869-dca58fcceb47",
        city: "38",
        area: "Gandhi Nagar",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "edkctt5gqh98vslrddrj",
        cuisines: ["South Indian"],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        slaString: "29 MINS",
        lastMileTravel: 3.5,
        slugs: {
          restaurant: "karim-hotel-governorpet-governorpet",
          city: "vijayawada",
        },
        cityState: "38",
        address: "Gandhi Nagar, Vijayawada, Andhra Pradesh 520002",
        locality: "Governorpet",
        parentId: 115118,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "417990",
          deliveryTime: 29,
          minDeliveryTime: 29,
          maxDeliveryTime: 29,
          lastMileTravel: 3.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "539646",
        name: "SR's Food Palace",
        uuid: "bcc0a37b-7d6a-43d8-94ab-4d05512aea2c",
        city: "38",
        area: "Benz Circle and Auto Nagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "wkrn3w4kkeeez9zbymv8",
        cuisines: ["Snacks"],
        tags: [],
        costForTwo: 13000,
        costForTwoString: "₹130 FOR TWO",
        deliveryTime: 41,
        minDeliveryTime: 41,
        maxDeliveryTime: 41,
        slaString: "41 MINS",
        lastMileTravel: 5,
        slugs: {
          restaurant:
            "sr's-food-palace-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          city: "vijayawada",
        },
        cityState: "38",
        address:
          "1-13 mahedawppuram colony kanuru  vijayawada , Tadigadapa , Penamaluru,  Krishna, Andhra Pradesh-520007",
        locality: "Penamaluru",
        parentId: 324450,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "539646",
          deliveryTime: 41,
          minDeliveryTime: 41,
          maxDeliveryTime: 41,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "112366",
        name: "New welcome tea & fast foods",
        uuid: "e654a40e-8073-4581-b14e-fcca2c292218",
        city: "38",
        area: "Governorpet",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "bc9tnfbphmkviundjkq6",
        cuisines: [
          "South Indian",
          "Andhra",
          "Chinese",
          "North Indian",
          "Tandoor",
        ],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        slaString: "34 MINS",
        lastMileTravel: 5.599999904632568,
        slugs: {
          restaurant: "new-welcome-tea-fast-foods-one-town-governorpet",
          city: "vijayawada",
        },
        cityState: "38",
        address: "Near ramanayya cool drinks, vinnakotavari chowk, 1 town",
        locality: "Near Ramanayya Cool Drink Shop",
        parentId: 148371,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "112366",
          deliveryTime: 34,
          minDeliveryTime: 34,
          maxDeliveryTime: 34,
          lastMileTravel: 5.599999904632568,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "525497",
        name: "TASTY PIZZA",
        uuid: "2b648544-1fc3-4f46-a757-129c2984dd39",
        city: "38",
        area: "BRAHMIN STREET",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "qmhhnpsouz65gh6sudjf",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 26000,
        costForTwoString: "₹260 FOR TWO",
        deliveryTime: 41,
        minDeliveryTime: 41,
        maxDeliveryTime: 41,
        slaString: "41 MINS",
        lastMileTravel: 5.900000095367432,
        slugs: {
          restaurant: "tasty-pizza-governorpet-governorpet",
          city: "vijayawada",
        },
        cityState: "38",
        address:
          "D.NO.9-3-71, GROUND FLOOR, BRAHMIN STREET, VIJAYAWADA ,,Vijayawada (Urban),N T R,Andhra Pradesh-520001",
        locality: "kothapeta",
        parentId: 3191,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5.9 kms",
        hasSurge: false,
        sla: {
          restaurantId: "525497",
          deliveryTime: 41,
          minDeliveryTime: 41,
          maxDeliveryTime: 41,
          lastMileTravel: 5.900000095367432,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          nonServiceableReason: null,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "2.2",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  console.log(name);
  return (
    <div className="card">
      <img
        alt="card!"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard
            {...restaurant.data.data}
            key={restaurant.data.data.id}
          />
        );
      })}
      <RestaurantCard {...restaurantList[0].data.data} />
      <RestaurantCard {...restaurantList[1].data.data} />
      <RestaurantCard {...restaurantList[2].data.data} />
      {/* <RestaurantCard restaurant={restaurantList[3]} />
      <RestaurantCard restaurant={restaurantList[4]} />
      <RestaurantCard restaurant={restaurantList[5]} />
      <RestaurantCard restaurant={restaurantList[6]} />
      <RestaurantCard restaurant={restaurantList[7]} /> */}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
