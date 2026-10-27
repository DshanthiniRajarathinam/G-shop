import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

// ==========================================
// 🍎 Category 1: Fruits (12 Real Image Files)
// ==========================================
import img13 from '../assests/apple.jpg';
import img12 from '../assests/banana.png';
import img9 from '../assests/images-removebg-preview.png';
import img10 from '../assests/pineapple-removebg-preview.png';
import img11 from '../assests/grapes-removebg-preview.png';
import img14 from '../assests/orange.jpg';
import img15 from '../assests/pomegranate.jpg';
import img16 from '../assests/mango.jpg';
import watermelonImg from '../assests/watermellon.jpg';
import papayaImg from '../assests/papayaa.jpg';
import kiwiImg from '../assests/kiwi.jpg';
import guavaImg from '../assests/guvaa.jpg';

// ==========================================
// 🥬 Category 2: Vegetables (12 Real Image Files)
// ==========================================
import img20 from '../assests/card1.jpg';
import img21 from '../assests/potato.jpg';
import img24 from '../assests/onion.jpg';
import img22 from '../assests/carrot.jpg';
import img23 from '../assests/beetroot.png';
import img17 from '../assests/brinjal-removebg-preview.png';
import img18 from '../assests/Drumstick-removebg-preview.png';
import img19 from '../assests/pumpkin-removebg-preview.png';
import broccoliImg from '../assests/broccoli.jpg';
import cauliflowerImg from '../assests/cauliflower.jpg';
import capsicumImg from '../assests/capsicum.jpg';
import ladyfingerImg from '../assests/ladyfinger.jpg';

// ==========================================
// 🥜 Category 3: Nuts & Dry Fruits (12 Real Image Files)
// ==========================================
import almondImg from '../assests/almond-removebg-preview.png';
import walnutImg from '../assests/walnuts.webp';
import pistaImg from '../assests/pistanuts.png';
import hazelnutImg from '../assests/Hazelnuts.jpg';
import brazilnutImg from '../assests/brazilnuts.jpg';
import macadamiaImg from '../assests/macadamia.png';
import peanutImg from '../assests/peanuts-removebg-preview.png';
import cashewImg from '../assests/nuts-removebg-preview.png';
import raisinsImg from '../assests/raisins.jpg';
import datesImg from '../assests/dates.jpg';
import figsImg from '../assests/fig.jpg';
import chiaSeedsImg from '../assests/chiaseeds.jpg';

// ==========================================
// 🥤 Category 4: Cold Beverages (12 Real Image Files)
// ==========================================
import colaImg from '../assests/cola-can.jpg';
import orangeJuiceImg from '../assests/orange-juice.jpg';
import lemonTeaImg from '../assests/lemon-iced-tea.jpg';
import coconutImg from '../assests/coconut-water.jpg';
import mangoSmoothieImg from '../assests/mango-smoothie.jpg';
import coffeeImg from '../assests/cold-brew-coffee.jpg';
import limeSodaImg from '../assests/sparkling-lime-soda.jpg';
import partyDrinksImg from '../assests/soft-drinks-removebg-preview.png';
import energyDrinkImg from '../assests/energydrink.jpg';
import lemonadeImg from '../assests/nimbupani.jpg';
import appleJuiceImg from '../assests/applejuice.png';
import chocoMilkshakeImg from '../assests/chochomilkshake.jpg';

// ==========================================
// 🌾 Category 5: Flours & Grains (12 Real Image Files)
// ==========================================
import attaImg from '../assests/atta-flour.png';
import multigrainImg from '../assests/multigrain-atta.jpg';
import besanImg from '../assests/besan-gram-flour.jpg';
import maidaImg from '../assests/maida-flour.jpg';
import ragiImg from '../assests/ragi-flour.jpg';
import sugarImg from '../assests/sugar.png';
import brownSugarImg from '../assests/brownsugar.png';
import bakingSodaImg from '../assests/baking-soda.jpg';
import riceFlourImg from '../assests/riceflour.jpg';
import cornFlourImg from '../assests/cornflour.jpg';
import soojiFlourImg from '../assests/rava.jpg';
import bajraFlourImg from '../assests/pearlmilletFlour.jpg';

// ==========================================
// 🍫 Category 6: Chocolates & Sweets (12 Real Image Files)
// ==========================================
import darkChocoImg from '../assests/dark-chocolate.jpg';
import milkChocoImg from '../assests/milk-chocolate.jpg';
import trufflesImg from '../assests/Belgiantruffles Box.jpg';
import chocoCookiesImg from '../assests/choco-cookies.jpg';
import whiteChocoImg from '../assests/whitechocolate.jpg';
import chocoLavaCakeImg from '../assests/lavacake.png';
import chocoBrownieImg from '../assests/brownie.jpg';
import nutellaSpreadImg from '../assests/nutellaspread.webp';
import chocoWaferImg from '../assests/Waferrolls.jpg';
import kitkatImg from '../assests/kitkat.jpg';
import fiveStarImg from '../assests/5star.jpg';
import eclairsImg from '../assests/Eclairscandies.jpg';

// ==========================================
// 🍿 Category 7: Snacks & Munchies (12 Real Image Files)
// ==========================================
import potatoChipsImg from '../assests/potato-chips.jpg';
import makhanaImg from '../assests/masala-makhana.jpg';
import nachosImg from '../assests/nachos.png';
import popcornImg from '../assests/popcorn.webp';
import bananaChipsImg from '../assests/bananachips.webp';
import alooBhujiaImg from '../assests/aloobhujia Sev.webp';
import spiralMurukkuImg from '../assests/Spiralmurukku.jpg';
import khakhraImg from '../assests/MethiKhakra.jpg';
import cheeseBallsImg from '../assests/CheeseBalls.webp';
import pretzelsImg from '../assests/SaltedKnotPretzels.webp';
import southIndianMixtureImg from '../assests/southindianmixture.webp';
import ringMurukkuImg from '../assests/ring muruku.jpg';

// ==========================================
// 🌶️ Category 8: Spices & Masalas (12 Real Image Files)
// ==========================================
import turmericImg from '../assests/turmeric.png';
import chillyImg from '../assests/chillypowder.jpg';
import pepperImg from '../assests/pepperpowder.jpg';
import garamMasalaImg from '../assests/garam-masala.jpg';
import cuminImg from '../assests/cumin-seeds.jpg';
import corianderImg from '../assests/coriander-powder.jpg';
import saltImg from '../assests/salt.png';
import cardamomImg from '../assests/elaichigreencardamom.webp';
import clovesImg from '../assests/clovelaung.webp';
import cinnamonImg from '../assests/CinnamonSticks (Dalchini).jpg';
import mustardSeedsImg from '../assests/BlackMustardSeeds.jpg';
import fenugreekImg from '../assests/Methiseed.webp';

// --- Unit & Weight Generator Helpers ---
// Generates weight options from 50g up to 1 Kg
const createGramOptions = (kgPrice, defaultIdx = 3) => {
  const p1k = kgPrice;
  const p500 = Math.max(12, Math.round(kgPrice * 0.52));
  const p250 = Math.max(7, Math.round(kgPrice * 0.28));
  const p100 = Math.max(4, Math.round(kgPrice * 0.12));
  const p50 = Math.max(2, Math.round(kgPrice * 0.07));
  return {
    defaultUnitIndex: defaultIdx,
    options: [
      { label: "50g", price: p50, oldPrice: Math.round(p50 * 1.25) },
      { label: "100g", price: p100, oldPrice: Math.round(p100 * 1.25) },
      { label: "250g", price: p250, oldPrice: Math.round(p250 * 1.25) },
      { label: "500g", price: p500, oldPrice: Math.round(p500 * 1.25) },
      { label: "1 Kg", price: p1k, oldPrice: Math.round(p1k * 1.25) }
    ]
  };
};

// Generates beverage volume options
const createBeverageOptions = (basePrice, defaultIdx = 1) => {
  const p250 = Math.max(20, Math.round(basePrice * 0.55));
  const p500 = basePrice;
  const p1L = Math.round(basePrice * 1.85);
  const pPack4 = Math.round(p250 * 3.8);
  return {
    defaultUnitIndex: defaultIdx,
    options: [
      { label: "250 ml", price: p250, oldPrice: Math.round(p250 * 1.25) },
      { label: "500 ml", price: p500, oldPrice: Math.round(p500 * 1.25) },
      { label: "1 Litre", price: p1L, oldPrice: Math.round(p1L * 1.25) },
      { label: "Pack of 4", price: pPack4, oldPrice: Math.round(pPack4 * 1.25) }
    ]
  };
};

// Generates piece/count options for bakery & single bars
const createPieceOptions = (singlePrice, unitName = "Piece") => {
  const p1 = singlePrice;
  const p2 = Math.round(singlePrice * 1.95);
  const p4 = Math.round(singlePrice * 3.8);
  const p6 = Math.round(singlePrice * 5.5);
  return {
    defaultUnitIndex: 0,
    options: [
      { label: `1 ${unitName}`, price: p1, oldPrice: Math.round(p1 * 1.25) },
      { label: `2 ${unitName}s`, price: p2, oldPrice: Math.round(p2 * 1.25) },
      { label: `Pack of 4`, price: p4, oldPrice: Math.round(p4 * 1.25) },
      { label: `Pack of 6`, price: p6, oldPrice: Math.round(p6 * 1.25) }
    ]
  };
};

const Bestsale = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const normalizeCategory = (cat) => {
    if (!cat) return "All";
    const lower = cat.toLowerCase().trim();
    if (lower === "fruits" || lower === "fruit") return "Fruits";
    if (lower === "vegetables" || lower === "vegetable") return "Vegetables";
    if (lower === "dry fruits" || lower === "dryfruits" || lower === "nuts") return "Dry Fruits";
    if (lower === "cold beverages" || lower === "beverages" || lower === "coldbeverages" || lower === "drinks") return "Cold Beverages";
    if (lower === "flours" || lower === "flour" || lower === "grains" || lower === "atta") return "Flours";
    if (lower === "chocolates" || lower === "chocolate" || lower === "chocholates" || lower === "sweets") return "Chocolates";
    if (lower === "snacks" || lower === "snack" || lower === "snaks" || lower === "munchies") return "Snacks";
    if (lower === "spices" || lower === "spice" || lower === "masalas" || lower === "masala") return "Spices";
    return "All";
  };

  const queryParam = searchParams.get("query") || "";
  const categoryParam = normalizeCategory(searchParams.get("category"));

  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [recording, setRecording] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  
  // Selected unit for each product ID
  const [selectedUnits, setSelectedUnits] = useState({});

  useEffect(() => {
    setSearchTerm(searchParams.get("query") || "");
    setActiveCategory(normalizeCategory(searchParams.get("category")));
  }, [searchParams]);

  const handleUnitChange = (productId, unitLabel) => {
    setSelectedUnits((prev) => ({
      ...prev,
      [productId]: unitLabel
    }));
  };

  const sections = {
    // 🍎 FRUITS (12 Real Image Products with 50g to 1 Kg options)
    Fruits: [
      { id: 1, image: img13, title: "Crisp Royal Apple", category: "Fruits", description: "Crisp Kashmiri apples, naturally sweet, juicy and high in dietary fiber.", rating: 4.8, unitData: createGramOptions(120) },
      { id: 2, image: img12, title: "Robusta Fresh Banana", category: "Fruits", description: "Farm-ripe golden bananas, packed with potassium and natural instant energy.", rating: 4.9, unitData: createGramOptions(60) },
      { id: 3, image: img9, title: "Sweet Red Strawberry", category: "Fruits", description: "Freshly harvested Mahabaleshwar strawberries, bursting with rich antioxidants.", rating: 4.9, unitData: createGramOptions(150, 1) },
      { id: 4, image: img10, title: "Tropical Sweet Pineapple", category: "Fruits", description: "Whole sweet tropical pineapple, rich in digestive enzymes and Vitamin C.", rating: 4.7, unitData: createGramOptions(70) },
      { id: 5, image: img11, title: "Seedless Green Grapes", category: "Fruits", description: "Crisp and juicy seedless green grapes, refreshing table snack.", rating: 4.8, unitData: createGramOptions(90) },
      { id: 6, image: img14, title: "Juicy Nagpur Orange", category: "Fruits", description: "Sweet and tangy sun-kissed Nagpur oranges loaded with natural Vitamin C.", rating: 4.7, unitData: createGramOptions(70) },
      { id: 7, image: img15, title: "Ruby Red Pomegranate", category: "Fruits", description: "Deep crimson juicy pomegranate pearls, superior heart-healthy superfood.", rating: 5.0, unitData: createGramOptions(160) },
      { id: 8, image: img16, title: "Alphonso Mango (Hapus)", category: "Fruits", description: "King of fruits: naturally ripened, fragrant and intensely sweet Alphonso mango.", rating: 5.0, unitData: createGramOptions(190) },
      { id: 9, image: watermelonImg, title: "Crisp Red Watermelon", category: "Fruits", description: "Hydrating, sweet and refreshing striped watermelon with ruby-red flesh.", rating: 4.8, unitData: createGramOptions(65) },
      { id: 10, image: papayaImg, title: "Sweet Farm Papaya", category: "Fruits", description: "Tender orange-fleshed tropical papaya, exceptionally easy on digestion.", rating: 4.6, unitData: createGramOptions(45) },
      { id: 11, image: kiwiImg, title: "Zesty Green Kiwi Fruit", category: "Fruits", description: "Tangy-sweet green kiwi with tender seeds, powerhouse of Vitamin C and E.", rating: 4.9, unitData: createGramOptions(140, 1) },
      { id: 12, image: guavaImg, title: "Crisp Pink Guava (Amrood)", category: "Fruits", description: "Fragrant tropical pink guava, crunchy outside with sweet tender center.", rating: 4.7, unitData: createGramOptions(50) }
    ],

    // 🥬 VEGETABLES (12 Real Image Products with 50g to 1 Kg options)
    Vegetables: [
      { id: 13, image: img20, title: "Farm Fresh Red Tomato", category: "Vegetables", description: "Juicy, vine-ripened red tomatoes ideal for salads, gravies, and soups.", rating: 4.8, unitData: createGramOptions(28) },
      { id: 14, image: img21, title: "Earthy Russet Potato", category: "Vegetables", description: "Versatile, smooth-skinned cooking potatoes, perfect for boiling, roasting or curries.", rating: 4.7, unitData: createGramOptions(32) },
      { id: 15, image: img24, title: "Crisp Nasik Red Onion", category: "Vegetables", description: "Pungent and crisp red onions, essential base for everyday Indian cooking.", rating: 4.6, unitData: createGramOptions(25) },
      { id: 16, image: img22, title: "Crunchy Mountain Carrot", category: "Vegetables", description: "Vibrant orange carrots, crunchy, sweet and loaded with beta-carotene.", rating: 4.8, unitData: createGramOptions(45) },
      { id: 17, image: img23, title: "Organic Ruby Beetroot", category: "Vegetables", description: "Deep ruby earthy beetroots, rich in natural iron, nitrates and dietary fiber.", rating: 4.7, unitData: createGramOptions(30) },
      { id: 18, image: img17, title: "Glossy Purple Brinjal", category: "Vegetables", description: "Tender, seed-free purple brinjal (eggplant) ideal for bharta and sambar.", rating: 4.5, unitData: createGramOptions(35) },
      { id: 19, image: img18, title: "Fresh Moringa Drumstick", category: "Vegetables", description: "Tender farm-harvested moringa drumsticks, rich in calcium and minerals.", rating: 4.8, unitData: createGramOptions(40, 2) },
      { id: 20, image: img19, title: "Golden Sweet Pumpkin", category: "Vegetables", description: "Nutritious orange sweet pumpkin, tender and delicious in curries and bakes.", rating: 4.6, unitData: createGramOptions(35) },
      { id: 21, image: broccoliImg, title: "Fresh Green Broccoli", category: "Vegetables", description: "Crisp emerald green broccoli crowns, packed with sulforaphane and Vitamin K.", rating: 4.9, unitData: createGramOptions(75, 2) },
      { id: 22, image: cauliflowerImg, title: "Tender White Cauliflower", category: "Vegetables", description: "Clean snow-white cauliflower head, tightly packed florets for curries & roasts.", rating: 4.7, unitData: createGramOptions(40) },
      { id: 23, image: capsicumImg, title: "Vibrant Green Capsicum", category: "Vegetables", description: "Crisp and aromatic green bell peppers, perfect for stir-fries, pizza & fajitas.", rating: 4.8, unitData: createGramOptions(48, 2) },
      { id: 24, image: ladyfingerImg, title: "Tender Green Ladyfinger (Bhindi)", category: "Vegetables", description: "Fresh, non-fibrous tender okra pods, ideal for crispy bhindi fry and masala.", rating: 4.7, unitData: createGramOptions(42, 2) }
    ],

    // 🥜 NUTS & DRY FRUITS (12 Real Image Products with 50g to 1 Kg options)
    "Dry Fruits": [
      { id: 25, image: almondImg, title: "California Whole Almonds (Badam)", category: "Dry Fruits", description: "Premium crunchy whole almonds, loaded with Vitamin E, protein, and brain nutrition.", rating: 5.0, unitData: createGramOptions(240, 2) },
      { id: 26, image: walnutImg, title: "Kashmiri Raw Walnuts (Akhrot)", category: "Dry Fruits", description: "Organic halved walnut kernels, superior plant source of vital Omega-3 fatty acids.", rating: 4.9, unitData: createGramOptions(320, 2) },
      { id: 27, image: pistaImg, title: "Roasted Salted Pistachios (Pista)", category: "Dry Fruits", description: "Crunchy California pistachios gently roasted in sea salt with easily opened shells.", rating: 4.8, unitData: createGramOptions(280, 2) },
      { id: 28, image: hazelnutImg, title: "Wholesome Raw Hazelnuts", category: "Dry Fruits", description: "Naturally sweet and buttery hazelnuts, great for baking, snacking, and keto diets.", rating: 4.7, unitData: createGramOptions(300, 2) },
      { id: 29, image: brazilnutImg, title: "Wild Amazon Brazil Nuts", category: "Dry Fruits", description: "Jumbo wild-harvested Brazil nuts, the world's most potent source of natural selenium.", rating: 4.8, unitData: createGramOptions(380, 1) },
      { id: 30, image: macadamiaImg, title: "Creamy Macadamia Nuts", category: "Dry Fruits", description: "Rich, velvety Australian macadamia nuts packed with heart-healthy monounsaturated fats.", rating: 4.9, unitData: createGramOptions(420, 1) },
      { id: 31, image: peanutImg, title: "Golden Roasted Peanuts", category: "Dry Fruits", description: "Crispy oven-roasted groundnuts seasoned lightly with pink rock salt.", rating: 4.6, unitData: createGramOptions(80, 2) },
      { id: 32, image: cashewImg, title: "Royal Whole Cashews (Kaju)", category: "Dry Fruits", description: "Grade W-240 large whole creamy cashews, smooth, sweet and naturally rich.", rating: 5.0, unitData: createGramOptions(320, 2) },
      { id: 33, image: raisinsImg, title: "Golden Seedless Raisins (Kismis)", category: "Dry Fruits", description: "Sun-dried golden raisins, naturally sweet with zero added sugar or preservatives.", rating: 4.8, unitData: createGramOptions(140, 2) },
      { id: 34, image: datesImg, title: "Arabian Medjool Dates (Khajoor)", category: "Dry Fruits", description: "Plump, soft and gooey Medjool dates, natural caramel-sweet energy boosters.", rating: 4.9, unitData: createGramOptions(200, 2) },
      { id: 35, image: figsImg, title: "Dried Organic Figs (Anjeer)", category: "Dry Fruits", description: "Sun-cured whole dried figs with chewy texture and crunchy seeds, high in calcium.", rating: 4.9, unitData: createGramOptions(300, 2) },
      { id: 36, image: chiaSeedsImg, title: "Organic Chia Superfood Seeds", category: "Dry Fruits", description: "Raw whole black chia seeds, rich in soluble dietary fiber and plant protein.", rating: 4.8, unitData: createGramOptions(160, 1) }
    ],

    // 🥤 COLD BEVERAGES (12 Real Image Products with 250ml to Pack of 4 options)
    "Cold Beverages": [
      { id: 37, image: colaImg, title: "Chilled Classic Cola Can", category: "Cold Beverages", description: "Iconic refreshing fizzy cola, served frosty cold with crisp effervescent carbonation.", rating: 4.8, unitData: createBeverageOptions(40) },
      { id: 38, image: orangeJuiceImg, title: "Cold-Pressed Orange Juice", category: "Cold Beverages", description: "100% pure Valencia orange juice with tender pulp and zero added sugar.", rating: 4.9, unitData: createBeverageOptions(85) },
      { id: 39, image: lemonTeaImg, title: "Iced Lemon Green Tea", category: "Cold Beverages", description: "Slow-steeped organic green tea infused with tangy lemon juice and garden mint.", rating: 4.7, unitData: createBeverageOptions(65) },
      { id: 40, image: coconutImg, title: "Tender Coconut Water", category: "Cold Beverages", description: "Pure naturally electrolyte-rich tender coconut water, hydrating and detoxifying.", rating: 5.0, unitData: createBeverageOptions(50) },
      { id: 41, image: mangoSmoothieImg, title: "Alphonso Mango Smoothie", category: "Cold Beverages", description: "Thick, creamy blend of sun-ripened Alphonso mango puree with rich yogurt.", rating: 4.9, unitData: createBeverageOptions(90) },
      { id: 42, image: coffeeImg, title: "Cold Brew Iced Coffee", category: "Cold Beverages", description: "16-hour slow steeped Arabica coffee poured over ice with a hint of cream.", rating: 4.8, unitData: createBeverageOptions(95) },
      { id: 43, image: limeSodaImg, title: "Sparkling Fresh Lime Soda", category: "Cold Beverages", description: "Effervescent club soda energized with freshly squeezed key lime and pinch of salt.", rating: 4.6, unitData: createBeverageOptions(35) },
      { id: 44, image: partyDrinksImg, title: "Sparkling Ginger Ale Pack", category: "Cold Beverages", description: "Fiery yet sweet carbonated ginger beverage pack, ideal for refreshing thirst.", rating: 4.8, unitData: createBeverageOptions(75, 3) },
      { id: 45, image: energyDrinkImg, title: "Citrus Charge Energy Drink", category: "Cold Beverages", description: "Crisp sparkling energy beverage fortified with Taurine, Caffeine and B-Vitamins.", rating: 4.7, unitData: createBeverageOptions(110) },
      { id: 46, image: lemonadeImg, title: "Mint Fresh Lemonade (Nimbu Pani)", category: "Cold Beverages", description: "Traditional Indian street-style lemon cooler with crushed ice, mint and roasted cumin.", rating: 4.8, unitData: createBeverageOptions(45) },
      { id: 47, image: appleJuiceImg, title: "Pure Golden Apple Juice", category: "Cold Beverages", description: "Cold-pressed cloudy Himalayan apple juice with crisp, sweet and tart notes.", rating: 4.8, unitData: createBeverageOptions(80) },
      { id: 48, image: chocoMilkshakeImg, title: "Creamy Chocolate Milkshake", category: "Cold Beverages", description: "Thick and indulgent chocolate dairy milkshake crafted with Belgian cocoa fudge.", rating: 4.9, unitData: createBeverageOptions(85) }
    ],

    // 🌾 FLOURS & GRAINS (12 Real Image Products with 50g to 1 Kg options)
    Flours: [
      { id: 49, image: attaImg, title: "Chakki Whole Wheat Atta", category: "Flours", description: "100% stone ground whole wheat flour with natural bran for soft, fluffy rotis.", rating: 4.9, unitData: createGramOptions(55, 4) },
      { id: 50, image: multigrainImg, title: "7-Grain Multigrain Atta", category: "Flours", description: "Nutritious blend of wheat, soya, chana, oat, ragi, and maize for wholesome vitality.", rating: 4.8, unitData: createGramOptions(75, 4) },
      { id: 51, image: besanImg, title: "Pure Besan (Gram Flour)", category: "Flours", description: "Finely milled yellow chana dal flour, essential for crispy pakoras, dhokla and sweets.", rating: 4.7, unitData: createGramOptions(48, 3) },
      { id: 52, image: maidaImg, title: "Refined Baking Maida Flour", category: "Flours", description: "Ultra-fine premium white wheat flour for fluffy cakes, breads, pastries and samosas.", rating: 4.6, unitData: createGramOptions(38, 4) },
      { id: 53, image: ragiImg, title: "Nutritious Ragi Flour (Millet)", category: "Flours", description: "Calcium and dietary fiber packed finger millet flour for healthy dosas and rotis.", rating: 4.9, unitData: createGramOptions(52, 3) },
      { id: 54, image: sugarImg, title: "Refined Pure Cane Sugar", category: "Flours", description: "Sparkling crystal white sugar refined from freshly harvested farm sugarcane.", rating: 4.7, unitData: createGramOptions(44, 4) },
      { id: 55, image: brownSugarImg, title: "Unrefined Organic Brown Sugar", category: "Flours", description: "Natural molasses-rich golden brown sugar with deep caramel aroma for bakes.", rating: 4.8, unitData: createGramOptions(68, 3) },
      { id: 56, image: bakingSodaImg, title: "Pure Food-Grade Baking Soda", category: "Flours", description: "Premium cooking grade sodium bicarbonate for airy, light cakes and crispy bakes.", rating: 4.7, unitData: createGramOptions(35, 1) },
      { id: 57, image: riceFlourImg, title: "Fine White Rice Flour (Chawal Atta)", category: "Flours", description: "Silky ground white rice flour for crispy murukku, idiyappam, and rice rotis.", rating: 4.8, unitData: createGramOptions(42, 3) },
      { id: 58, image: cornFlourImg, title: "Pure Yellow Corn Flour (Starch)", category: "Flours", description: "High-grade maize starch powder for thickening sauces, soups and crispy batters.", rating: 4.7, unitData: createGramOptions(36, 3) },
      { id: 59, image: soojiFlourImg, title: "Roasted Sooji Rava (Semolina)", category: "Flours", description: "Crisp granulated durum wheat semolina for quick upma, halwa and rava dosa.", rating: 4.8, unitData: createGramOptions(40, 3) },
      { id: 60, image: bajraFlourImg, title: "Pearl Millet Bajra Flour", category: "Flours", description: "Traditional gluten-free pearl millet flour for rustic, warming winter rotlas.", rating: 4.8, unitData: createGramOptions(48, 3) }
    ],

    // 🍫 CHOCOLATES & SWEETS (12 Real Image Products with custom unit options)
    Chocolates: [
      { id: 61, image: darkChocoImg, title: "70% Single Origin Dark Chocolate", category: "Chocolates", description: "Artisanal bittersweet dark chocolate bar crafted from pure Ghanaian cocoa beans.", rating: 5.0, unitData: createGramOptions(140, 2) },
      { id: 62, image: milkChocoImg, title: "Creamy Swiss Milk Chocolate", category: "Chocolates", description: "Silky melt-in-mouth milk chocolate bar blended with rich Alpine dairy milk.", rating: 4.9, unitData: createGramOptions(110, 2) },
      { id: 63, image: trufflesImg, title: "Belgian Cocoa Truffles Gift Box", category: "Chocolates", description: "Gourmet handcrafted dark chocolate ganache balls dusted with Dutch cocoa powder.", rating: 4.9, unitData: createPieceOptions(180, "Box") },
      { id: 64, image: chocoCookiesImg, title: "Butter Choco Chip Cookies", category: "Chocolates", description: "Crunchy golden oven-baked butter cookies generously studded with chocolate chips.", rating: 4.8, unitData: createGramOptions(90, 2) },
      { id: 65, image: whiteChocoImg, title: "Velvet White Chocolate Bar", category: "Chocolates", description: "Creamy pure cocoa butter bar infused with fragrant Madagascar vanilla pods.", rating: 4.7, unitData: createGramOptions(120, 2) },
      { id: 66, image: chocoLavaCakeImg, title: "Molten Choco Lava Cake", category: "Chocolates", description: "Warm bakery delight with moist cocoa crust and an oozy liquid chocolate center.", rating: 4.9, unitData: createPieceOptions(75, "Cake") },
      { id: 67, image: chocoBrownieImg, title: "Fudge Walnut Choco Brownie", category: "Chocolates", description: "Dense, chewy double-chocolate brownie loaded with roasted crunchy walnut pieces.", rating: 4.8, unitData: createPieceOptions(60, "Brownie") },
      { id: 68, image: nutellaSpreadImg, title: "Nutella Hazelnut Cocoa Spread", category: "Chocolates", description: "Rich velvety cocoa and roasted hazelnut breakfast spread for toast, pancakes and crepes.", rating: 5.0, unitData: createGramOptions(220, 2) },
      { id: 69, image: chocoWaferImg, title: "Crispy Chocolate Wafer Rolls", category: "Chocolates", description: "Layered crispy wafer sticks filled with smooth chocolate cream, perfect with ice cream.", rating: 4.7, unitData: createGramOptions(85, 2) },
      { id: 70, image: kitkatImg, title: "KitKat Crisp Chocolate Wafer Bar", category: "Chocolates", description: "Crisp wafer fingers covered in smooth dairy milk chocolate. Have a break!", rating: 4.9, unitData: createPieceOptions(25, "Bar") },
      { id: 71, image: fiveStarImg, title: "Cadbury 5 Star Caramel Choco Bar", category: "Chocolates", description: "A delicious mix of chewy golden caramel and smooth milk chocolate fudge.", rating: 4.8, unitData: createPieceOptions(20, "Bar") },
      { id: 72, image: eclairsImg, title: "Cadbury Choco Eclairs Candies Pouch", category: "Chocolates", description: "Traditional chewy caramel toffees with an explosive burst of chocolate fudge inside.", rating: 4.8, unitData: createGramOptions(75, 2) }
    ],

    // 🍿 SNACKS & MUNCHIES (12 Real Image Products with 50g to 1 Kg options)
    Snacks: [
      { id: 73, image: potatoChipsImg, title: "Classic Salted Potato Chips", category: "Snacks", description: "Thinly sliced, golden farm potato crisps seasoned with light sea salt.", rating: 4.8, unitData: createGramOptions(120, 2) },
      { id: 74, image: makhanaImg, title: "Spiced Masala Roasted Makhana", category: "Snacks", description: "Popped organic lotus seeds roasted in olive oil with zesty Indian chaat spices.", rating: 4.9, unitData: createGramOptions(280, 1) },
      { id: 75, image: nachosImg, title: "Mexican Corn Tortilla Nachos", category: "Snacks", description: "Crispy stone-ground triangular corn tortilla chips flavored with mild jalapeno.", rating: 4.7, unitData: createGramOptions(150, 2) },
      { id: 76, image: popcornImg, title: "Cinema Style Butter Popcorn", category: "Snacks", description: "Fluffy popped whole corn kernels tossed in rich melted butter and fine salt.", rating: 4.8, unitData: createGramOptions(110, 2) },
      { id: 77, image: bananaChipsImg, title: "Crispy Kerala Banana Chips", category: "Snacks", description: "Authentic raw Nendran plantain wafers fried to a golden crunch in pure coconut oil.", rating: 4.9, unitData: createGramOptions(160, 2) },
      { id: 78, image: alooBhujiaImg, title: "Spicy Aloo Bhujia Sev", category: "Snacks", description: "Crunchy spiced potato and moth bean vermicelli seasoned with mint and garam masala.", rating: 4.8, unitData: createGramOptions(140, 2) },
      { id: 79, image: spiralMurukkuImg, title: "South Indian Spiral Murukku (Chakli)", category: "Snacks", description: "Crisp spiral chakli savory snack prepared with roasted rice flour, sesame and cumin.", rating: 4.7, unitData: createGramOptions(140, 2) },
      { id: 80, image: khakhraImg, title: "Gujarati Methi Wheat Khakhra", category: "Snacks", description: "Thin, vacuum-packed roasted whole wheat crispbread seasoned with fragrant dry fenugreek.", rating: 4.8, unitData: createGramOptions(150, 2) },
      { id: 81, image: cheeseBallsImg, title: "Cheddar Puffed Cheese Balls", category: "Snacks", description: "Bite-sized puffed corn balls dusted generously with sharp cheddar cheese seasoning.", rating: 4.6, unitData: createGramOptions(130, 2) },
      { id: 82, image: pretzelsImg, title: "Salted Golden Knot Pretzels", category: "Snacks", description: "Oven-baked European knot pretzels with shiny crust and coarse crystal sea salt.", rating: 4.7, unitData: createGramOptions(160, 2) },
      { id: 83, image: southIndianMixtureImg, title: "South Indian Spicy Mixture Namkeen", category: "Snacks", description: "Zesty traditional mixture of roasted peanuts, curry leaves, fried boondi, and crisp sev.", rating: 4.9, unitData: createGramOptions(150, 2) },
      { id: 84, image: ringMurukkuImg, title: "Crispy Ring Murukku (Chegodilu)", category: "Snacks", description: "Authentic Andhra tea-time ring murukku, crispy and roasted with hot spices and sesame.", rating: 4.8, unitData: createGramOptions(140, 2) }
    ],

    // 🌶️ SPICES & MASALAS (12 Real Image Products with 50g to 1 Kg options)
    Spices: [
      { id: 85, image: turmericImg, title: "Salem Golden Turmeric Powder", category: "Spices", description: "Pure sun-cured Salem turmeric root powder with high 5% natural curcumin content.", rating: 4.9, unitData: createGramOptions(140, 2) },
      { id: 86, image: chillyImg, title: "Guntur Fiery Red Chilli Powder", category: "Spices", description: "Authentic Andhra Guntur chillies stone ground for vibrant red color and fiery heat.", rating: 4.8, unitData: createGramOptions(160, 2) },
      { id: 87, image: pepperImg, title: "Crushed Black Pepper Powder", category: "Spices", description: "Pungent Malabar tellicherry black peppercorns freshly coarse-ground for sharp aroma.", rating: 4.9, unitData: createGramOptions(280, 1) },
      { id: 88, image: garamMasalaImg, title: "Royal 15-Spice Garam Masala", category: "Spices", description: "Artisan blend of cardamom, mace, cinnamon, cloves and star anise for rich curries.", rating: 4.9, unitData: createGramOptions(300, 1) },
      { id: 89, image: cuminImg, title: "Whole Cumin Seeds (Jeera)", category: "Spices", description: "Fragrant whole Gujarat cumin seeds, essential for aromatic tadka and tempering.", rating: 4.7, unitData: createGramOptions(180, 2) },
      { id: 90, image: corianderImg, title: "Fragrant Coriander Powder (Dhania)", category: "Spices", description: "Slow-roasted green coriander seeds milled fine to give thick, savory Indian gravies.", rating: 4.7, unitData: createGramOptions(130, 2) },
      { id: 91, image: saltImg, title: "Pure Himalayan Pink Rock Salt", category: "Spices", description: "Natural unrefined mineral-rich crystal pink salt mined from Himalayan foothills.", rating: 4.8, unitData: createGramOptions(35, 4) },
      { id: 92, image: cardamomImg, title: "Whole Green Cardamom Pods (Elaichi)", category: "Spices", description: "Grade-A bold green cardamom pods bursting with sweet aromatic oils for chai and sweets.", rating: 5.0, unitData: createGramOptions(650, 0) },
      { id: 93, image: clovesImg, title: "Whole Malabar Cloves (Laung)", category: "Spices", description: "Aromatic sun-dried whole cloves with plump crowns, high in natural eugenol oil.", rating: 4.8, unitData: createGramOptions(450, 0) },
      { id: 94, image: cinnamonImg, title: "Ceylon Cinnamon Sticks (Dalchini)", category: "Spices", description: "Thin, fragrant quills of pure Ceylon cinnamon with sweet, woody and delicate notes.", rating: 4.9, unitData: createGramOptions(380, 1) },
      { id: 95, image: mustardSeedsImg, title: "Black Mustard Seeds (Rai / Sarson)", category: "Spices", description: "Pungent small black mustard seeds that pop with flavor in South Indian tempering.", rating: 4.7, unitData: createGramOptions(120, 2) },
      { id: 96, image: fenugreekImg, title: "Golden Fenugreek Seeds (Methi Dana)", category: "Spices", description: "Nutritious golden fenugreek seeds with distinct bittersweet aroma, great for curries and health.", rating: 4.8, unitData: createGramOptions(120, 2) }
    ]
  };

  const allProducts = Object.values(sections).flat();

  // Filter based on search term and active tab
  const getFilteredItems = () => {
    let list = allProducts;
    if (activeCategory === "Fruits") {
      list = sections.Fruits;
    } else if (activeCategory === "Vegetables") {
      list = sections.Vegetables;
    } else if (activeCategory === "Dry Fruits") {
      list = sections["Dry Fruits"];
    } else if (activeCategory === "Cold Beverages") {
      list = sections["Cold Beverages"];
    } else if (activeCategory === "Flours") {
      list = sections.Flours;
    } else if (activeCategory === "Chocolates") {
      list = sections.Chocolates;
    } else if (activeCategory === "Snacks") {
      list = sections.Snacks;
    } else if (activeCategory === "Spices") {
      list = sections.Spices;
    }

    if (!searchTerm.trim()) {
      return list;
    }

    const term = searchTerm.toLowerCase();
    return list.filter((product) =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  };

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", cat);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    const newParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      newParams.set("query", value);
    } else {
      newParams.delete("query");
    }
    setSearchParams(newParams);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("query");
    setSearchParams(newParams);
  };

  const handleAddToCart = (product, activeOption) => {
    const cartItem = {
      id: product.id,
      cartKey: `${product.id}_${activeOption.label}`,
      title: product.title,
      category: product.category,
      image: product.image,
      price: activeOption.price,
      oldPrice: activeOption.oldPrice,
      unit: activeOption.label,
      description: product.description,
    };
    dispatch(addToCart(cartItem));
    setToastMessage(`Added ${activeOption.label} of ${product.title} to your basket!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // --- Voice search with AssemblyAI (Backend Integration Preserved 100%) ---
  const startRecording = async () => {
    setRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      let chunks = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const file = new File([blob], "voice.webm", { type: "audio/webm" });
        await sendToAssemblyAI(file);
        setRecording(false);
      };

      mediaRecorder.start();
      setTimeout(() => mediaRecorder.stop(), 5000);
    } catch (err) {
      console.error("Microphone access error:", err);
      alert("Microphone permission denied or not supported.");
      setRecording(false);
    }
  };

  const sendToAssemblyAI = async (file) => {
    try {
      const formData = new FormData();
      formData.append("audio", file);

      const response = await fetch(
        "https://g-shop-backend-atpy.onrender.com/api/voice-search",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Voice search failed");
      }

      const voiceText = data.text || "";
      handleSearchChange(voiceText);
    } catch (error) {
      console.error("Voice search error:", error);
      alert("Voice search failed. Please try again.");
    } finally {
      setRecording(false);
    }
  };

  const itemsToDisplay = getFilteredItems();

  const getCategoryEmoji = (cat) => {
    switch (cat) {
      case "Fruits": return "🍎 ";
      case "Vegetables": return "🥬 ";
      case "Dry Fruits": return "🥜 ";
      case "Cold Beverages": return "🥤 ";
      case "Flours": return "🌾 ";
      case "Chocolates": return "🍫 ";
      case "Snacks": return "🍿 ";
      case "Spices": return "🌶️ ";
      default: return "🧺 ";
    }
  };

  const getCategoryCount = (cat) => {
    if (cat === "All") return allProducts.length;
    return sections[cat]?.length || 0;
  };

  const getBannerDetails = () => {
    switch (activeCategory) {
      case "Vegetables":
        return {
          badge: "🥬 100% FARM-DIRECT HARVEST",
          title: "Fresh Farm Vegetables",
          subtitle: "Handpicked green vegetables and crispy farm roots, harvested at sunrise and delivered in 15 mins.",
          gradient: "linear-gradient(135deg, #065f46 0%, #047857 50%, #10b981 100%)",
        };
      case "Fruits":
        return {
          badge: "🍎 100% FRESH & NATURALLY SWEET",
          title: "Farm-Fresh Juicy Fruits",
          subtitle: "Sun-ripened, seasonal fruits bursting with natural vitamins and authentic sweetness.",
          gradient: "linear-gradient(135deg, #b91c1c 0%, #ef4444 50%, #f97316 100%)",
        };
      case "Dry Fruits":
        return {
          badge: "🥜 100% NATURAL & WHOLESOME",
          title: "Nuts & Dry Fruits",
          subtitle: "Crispy California almonds, Kashmiri walnuts, pistachios, hazelnuts, and energy-packed trail mixes.",
          gradient: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)",
        };
      case "Cold Beverages":
        return {
          badge: "🥤 100% CHILLED & REFRESHING",
          title: "Chilled Cold Beverages",
          subtitle: "Quench your thirst with ice-cold sodas, freshly squeezed juices, tender coconut water, and iced brews.",
          gradient: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)",
        };
      case "Flours":
        return {
          badge: "🌾 100% PURE & STONE GROUND",
          title: "Flours & Kitchen Grains",
          subtitle: "Wholesome stone ground chakki atta, multigrain flour, besan, and daily pantry staples.",
          gradient: "linear-gradient(135deg, #854d0e 0%, #ca8a04 50%, #eab308 100%)",
        };
      case "Chocolates":
        return {
          badge: "🍫 100% ARTISANAL & BRANDED SWEETS",
          title: "Chocolates & Sweet Treats",
          subtitle: "KitKat, Cadbury 5 Star, Nutella, handcrafted dark chocolates, luxury truffles, and brownies.",
          gradient: "linear-gradient(135deg, #3b0764 0%, #581c87 50%, #7e22ce 100%)",
        };
      case "Snacks":
        return {
          badge: "🍿 CRUNCHY, ROASTED & SAVORY",
          title: "Snacks & Munchies",
          subtitle: "Potato chips, nachos, popcorn, banana chips, spiral murukku, ring murukku, and spicy mixture.",
          gradient: "linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%)",
        };
      case "Spices":
        return {
          badge: "🌶️ 100% PURE & AROMATIC",
          title: "Pure Spices & Masalas",
          subtitle: "Freshly ground Salem turmeric, Guntur chilli, cardamom pods, cinnamon sticks, cloves, and whole spices.",
          gradient: "linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #ea580c 100%)",
        };
      default:
        return {
          badge: "🌱 100% FARM FRESH MARKETPLACE",
          title: "Fresh Groceries & Essentials",
          subtitle: "Directly from trusted farms & orchards. Clean, hygienic, and delivered to your door in 15 minutes.",
          gradient: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
        };
    }
  };

  const banner = getBannerDetails();

  return (
    <div className="bestsale-page" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="grocery-toast-fixed shadow-lg">
          <div className="toast-success-icon">
            <i className="bi bi-cart-check-fill"></i>
          </div>
          <div className="flex-grow-1">
            <div className="fw-bold text-success small">BASKET UPDATED</div>
            <div className="small text-dark fw-semibold">{toastMessage}</div>
          </div>
          <Link to="/cart" className="btn btn-sm btn-success rounded-pill px-3 py-1 shadow-sm">
            View Cart
          </Link>
        </div>
      )}

      {/* Dynamic Header Banner */}
      <section className="text-white py-4 py-lg-5 mb-4 position-relative" style={{ background: banner.gradient }}>
        <div className="container text-center">
          <span className="badge bg-white text-dark fw-bold px-3 py-1 rounded-pill mb-2">
            {banner.badge}
          </span>
          <h1 className="fw-bold display-6 mb-2">{banner.title}</h1>
          <p className="text-white-50 mb-0 max-w-lg mx-auto">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* Search & Voice Filter Bar */}
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-2">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-search text-muted ms-3 fs-5"></i>
                <input
                  type="text"
                  className="form-control border-0 shadow-none fs-6"
                  placeholder={
                    activeCategory === "All"
                      ? "Search across all 96 groceries and choose your weight/unit..."
                      : `Search within ${activeCategory}...`
                  }
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="btn btn-sm btn-light rounded-circle text-muted"
                    onClick={handleClearSearch}
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
                <button
                  className={`btn rounded-circle d-flex align-items-center justify-content-center ${
                    recording ? "btn-danger" : "btn-outline-success"
                  }`}
                  style={{ width: "42px", height: "42px", flexShrink: 0 }}
                  onClick={startRecording}
                  title={recording ? "Listening..." : "Voice Search"}
                  aria-label="Voice Search"
                >
                  {recording ? (
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    <i className="bi bi-mic-fill fs-5"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filter Category Pills */}
        <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
          {["All", "Fruits", "Vegetables", "Dry Fruits", "Cold Beverages", "Flours", "Chocolates", "Snacks", "Spices"].map((cat) => (
            <button
              key={cat}
              className={`btn rounded-pill px-4 py-2 fw-semibold ${
                activeCategory === cat
                  ? "btn-success shadow-sm"
                  : "btn-outline-secondary bg-white border-0 shadow-sm"
              }`}
              onClick={() => handleCategorySelect(cat)}
            >
              {getCategoryEmoji(cat)}
              {cat} ({getCategoryCount(cat)})
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container pb-5">
        {itemsToDisplay.length === 0 ? (
          <div className="text-center py-5">
            <div className="fs-1 mb-3">🔍</div>
            <h4 className="fw-bold text-dark">No Groceries Found</h4>
            <p className="text-muted">
              We couldn't find anything matching "<strong>{searchTerm}</strong>" {activeCategory !== "All" && `in ${activeCategory}`}.
            </p>
            <div className="d-flex justify-content-center gap-2">
              {searchTerm && (
                <button
                  className="btn btn-outline-success rounded-pill px-4"
                  onClick={handleClearSearch}
                >
                  Clear Search
                </button>
              )}
              {activeCategory !== "All" && (
                <button
                  className="btn btn-success rounded-pill px-4"
                  onClick={() => handleCategorySelect("All")}
                >
                  View All Categories
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {itemsToDisplay.map((item) => {
              const options = item.unitData.options;
              const defaultIdx = item.unitData.defaultUnitIndex || 0;
              const chosenUnit = selectedUnits[item.id] || options[defaultIdx].label;
              const activeOption = options.find((opt) => opt.label === chosenUnit) || options[0];

              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                  <div className="grocery-product-card">

                    <div className="product-img-container">
                      <img src={item.image} alt={item.title} />
                    </div>

                    <div className="product-card-body">
                      <span className="product-category-tag">
                        {item.category}
                      </span>
                      <h5 className="product-title">{item.title}</h5>
                      <p className="product-desc">{item.description}</p>

                      {/* Weight / Unit Selector Dropdown */}
                      <div className="product-unit-selector">
                        <label className="unit-selector-label">
                          <i className="bi bi-sliders text-success"></i>
                          <span>Select Weight / Unit:</span>
                        </label>
                        <select
                          className="form-select form-select-sm unit-select-dropdown rounded-pill"
                          value={activeOption.label}
                          onChange={(e) => handleUnitChange(item.id, e.target.value)}
                        >
                          {options.map((opt) => (
                            <option key={opt.label} value={opt.label}>
                              {opt.label} — ₹{opt.price}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Dynamic Price Display according to selected unit */}
                      <div className="product-price-row">
                        <span className="product-price-current">₹{activeOption.price}</span>
                        {activeOption.oldPrice && (
                          <del className="text-muted small">₹{activeOption.oldPrice}</del>
                        )}
                        <span className="product-price-unit">/ {activeOption.label}</span>
                      </div>

                      <button
                        className="product-add-btn"
                        onClick={() => handleAddToCart(item, activeOption)}
                      >
                        <i className="bi bi-cart-plus-fill"></i>
                        <span>Add to Cart ({activeOption.label})</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};

export default Bestsale;
