import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserCheck, Home, Mountain, Star, MapPin, Search, X,
  Phone, Mail, Calendar, Clock, Award, CreditCard,
  Check, AlertCircle, Utensils, ArrowLeft, Car, Shield, Users
} from 'lucide-react';

const ServicesMarketplace = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');
  const [selectedService, setSelectedService] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);

  // Comprehensive services data with extensive categories
  const servicesData = {
    guides: [
      // MALE CULTURAL HERITAGE GUIDES
      {
        id: 'guide1',
        name: 'Ravi Kumar Singh - Senior Heritage Guide',
        category: 'Guides',
        subcategory: 'Cultural Heritage',
        gender: 'Male',
        location: 'Ranchi',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 187,
        price: 1800,
        priceUnit: 'per day',
        languages: ['Hindi', 'English', 'Santhali', 'Bengali', 'Oraon'],
        experience: '12 years',
        age: 38,
        specialties: ['Tribal Culture', 'Historical Sites', 'Local Traditions', 'Festival Tours', 'Archaeological Sites'],
        description: 'Master storyteller and cultural expert specializing in Jharkhand\'s tribal heritage. Certified by Archaeological Survey of India.',
        contact: '+91 9876543210',
        email: 'ravi.heritage@jharkhand.com',
        capacity: '1-20 people',
        availability: 'Daily 6 AM - 9 PM',
        certifications: ['ASI Certified Guide', 'Cultural Heritage Specialist', 'Tribal Customs Expert'],
        amenities: ['Traditional Costume Demos', 'Folk Music Sessions', 'Handicraft Workshops', 'Tribal Dance Shows'],
        tourTypes: ['Full Day Heritage', 'Multi-day Cultural', 'Village Immersion', 'Festival Special']
      },
      {
        id: 'guide2',
        name: 'Santosh Mahato - Tribal Culture Expert',
        category: 'Guides',
        subcategory: 'Cultural Heritage',
        gender: 'Male',
        location: 'Khunti',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 142,
        price: 1600,
        priceUnit: 'per day',
        languages: ['Hindi', 'Munda', 'Ho', 'Kurukh'],
        experience: '10 years',
        age: 42,
        specialties: ['Munda Traditions', 'Tribal Villages', 'Indigenous Crafts', 'Sacred Groves'],
        description: 'Born and raised in tribal community, offers authentic insights into Munda and Ho tribal life.',
        contact: '+91 9876543211',
        email: 'santosh.tribal@jharkhand.com',
        capacity: '1-15 people',
        availability: 'Daily 7 AM - 7 PM',
        certifications: ['Tribal Community Leader', 'Indigenous Culture Expert'],
        amenities: ['Village Homestay Arrangements', 'Traditional Meal Preparations', 'Craft Making Sessions'],
        tourTypes: ['Village Walking Tours', 'Tribal Lifestyle Experience', 'Sacred Site Visits']
      },

      // FEMALE CULTURAL HERITAGE GUIDES
      {
        id: 'guide3',
        name: 'Priya Kumari - Cultural Storyteller',
        category: 'Guides',
        subcategory: 'Cultural Heritage',
        gender: 'Female',
        location: 'Ranchi',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 156,
        price: 1700,
        priceUnit: 'per day',
        languages: ['Hindi', 'English', 'Santhali', 'Bengali'],
        experience: '8 years',
        age: 32,
        specialties: ['Women\'s Traditions', 'Folk Tales', 'Handicrafts', 'Cultural Performances'],
        description: 'Expert in women\'s role in tribal society, traditional crafts, and oral storytelling traditions.',
        contact: '+91 9876543212',
        email: 'priya.culture@jharkhand.com',
        capacity: '1-18 people',
        availability: 'Daily 8 AM - 6 PM',
        certifications: ['Women\'s Cultural Studies', 'Folk Art Specialist', 'Traditional Craft Expert'],
        amenities: ['Women\'s Craft Workshops', 'Traditional Cooking Classes', 'Folk Dance Lessons'],
        tourTypes: ['Women\'s Heritage Tours', 'Craft Workshop Tours', 'Cultural Performance Tours']
      },
      {
        id: 'guide4',
        name: 'Sunita Devi - Heritage & Arts Guide',
        category: 'Guides',
        subcategory: 'Cultural Heritage',
        gender: 'Female',
        location: 'Dumka',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 98,
        price: 1500,
        priceUnit: 'per day',
        languages: ['Hindi', 'Santhali', 'Bengali'],
        experience: '6 years',
        age: 28,
        specialties: ['Santhali Arts', 'Traditional Paintings', 'Tribal Jewelry', 'Festival Customs'],
        description: 'Young and enthusiastic guide specializing in Santhali art forms and traditional craftsmanship.',
        contact: '+91 9876543213',
        email: 'sunita.arts@jharkhand.com',
        capacity: '1-12 people',
        availability: 'Daily 9 AM - 5 PM',
        certifications: ['Fine Arts Graduate', 'Traditional Art Specialist'],
        amenities: ['Art Workshops', 'Painting Classes', 'Jewelry Making Sessions'],
        tourTypes: ['Art & Craft Tours', 'Artist Village Visits', 'Traditional Art Workshops']
      },

      // MALE ADVENTURE GUIDES
      {
        id: 'guide5',
        name: 'Vikram Singh - Mountain Trek Leader',
        category: 'Guides',
        subcategory: 'Adventure & Trekking',
        gender: 'Male',
        location: 'Netarhat',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 203,
        price: 2200,
        priceUnit: 'per day',
        languages: ['Hindi', 'English'],
        experience: '15 years',
        age: 40,
        specialties: ['High Altitude Trekking', 'Rock Climbing', 'Survival Skills', 'Photography'],
        description: 'Professional mountaineer with extensive experience in Netarhat hills and surrounding peaks.',
        contact: '+91 9876543214',
        email: 'vikram.adventure@jharkhand.com',
        capacity: '1-8 people',
        availability: 'Daily 5 AM - 8 PM',
        certifications: ['Advanced Mountaineering', 'Rescue Operations', 'Wilderness First Aid', 'Rock Climbing Instructor'],
        amenities: ['Complete Safety Gear', 'Professional Photography', 'Route Planning', 'Emergency Equipment'],
        tourTypes: ['Day Treks', 'Multi-day Expeditions', 'Technical Climbs', 'Photography Tours']
      },
      {
        id: 'guide6',
        name: 'Rajesh Kumar - Water Sports Expert',
        category: 'Guides',
        subcategory: 'Adventure & Trekking',
        gender: 'Male',
        location: 'Patratu Lake',
        image: '/api/placeholder/400/300',
        rating: 4.6,
        reviewCount: 134,
        price: 1900,
        priceUnit: 'per day',
        languages: ['Hindi', 'English', 'Bengali'],
        experience: '9 years',
        age: 35,
        specialties: ['Water Sports', 'Kayaking', 'Fishing', 'Lake Activities'],
        description: 'Water sports enthusiast specializing in lake activities and aquatic adventures.',
        contact: '+91 9876543215',
        email: 'rajesh.watersports@jharkhand.com',
        capacity: '1-10 people',
        availability: 'Daily 6 AM - 7 PM',
        certifications: ['Water Sports Instructor', 'Lifeguard Certified', 'Boat Operating License'],
        amenities: ['Water Sports Equipment', 'Safety Gear', 'Fishing Equipment', 'Boat Access'],
        tourTypes: ['Water Sports Adventures', 'Fishing Expeditions', 'Lake Exploration', 'Kayaking Tours']
      },

      // FEMALE ADVENTURE GUIDES
      {
        id: 'guide7',
        name: 'Anita Sharma - Nature Trek Guide',
        category: 'Guides',
        subcategory: 'Adventure & Trekking',
        gender: 'Female',
        location: 'Netarhat',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 167,
        price: 2000,
        priceUnit: 'per day',
        languages: ['Hindi', 'English'],
        experience: '7 years',
        age: 30,
        specialties: ['Nature Trekking', 'Botanical Tours', 'Bird Watching', 'Eco Photography'],
        description: 'Nature lover and environmental science graduate specializing in eco-friendly trekking.',
        contact: '+91 9876543216',
        email: 'anita.nature@jharkhand.com',
        capacity: '1-12 people',
        availability: 'Daily 6 AM - 6 PM',
        certifications: ['Environmental Science Degree', 'Eco-tourism Specialist', 'Bird Watching Expert'],
        amenities: ['Nature Guides', 'Botanical Information', 'Bird Identification', 'Photography Tips'],
        tourTypes: ['Nature Walks', 'Botanical Tours', 'Bird Watching Expeditions', 'Eco-photography Tours']
      },
      {
        id: 'guide8',
        name: 'Kavita Devi - Adventure Sports Guide',
        category: 'Guides',
        subcategory: 'Adventure & Trekking',
        gender: 'Female',
        location: 'Hazaribagh',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 89,
        price: 1800,
        priceUnit: 'per day',
        languages: ['Hindi', 'English'],
        experience: '5 years',
        age: 26,
        specialties: ['Adventure Sports', 'Team Building', 'Youth Programs', 'Fitness Training'],
        description: 'Young and energetic adventure guide focusing on youth adventure programs and team building.',
        contact: '+91 9876543217',
        email: 'kavita.adventure@jharkhand.com',
        capacity: '1-15 people',
        availability: 'Daily 7 AM - 6 PM',
        certifications: ['Adventure Sports Instructor', 'Team Building Facilitator', 'Youth Program Leader'],
        amenities: ['Group Activities', 'Team Building Exercises', 'Fitness Programs', 'Youth-friendly Activities'],
        tourTypes: ['Adventure Camps', 'Team Building Programs', 'Youth Adventures', 'Fitness Tours']
      },

      // MALE WILDLIFE GUIDES
      {
        id: 'guide9',
        name: 'Manoj Kumar - Wildlife Photographer Guide',
        category: 'Guides',
        subcategory: 'Wildlife & Nature',
        gender: 'Male',
        location: 'Betla National Park',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 245,
        price: 2500,
        priceUnit: 'per safari',
        languages: ['Hindi', 'English', 'Bengali'],
        experience: '18 years',
        age: 45,
        specialties: ['Wildlife Photography', 'Tiger Tracking', 'Elephant Behavior', 'Nocturnal Wildlife'],
        description: 'Renowned wildlife photographer and tracker with 18 years of jungle experience.',
        contact: '+91 9876543218',
        email: 'manoj.wildlife@jharkhand.com',
        capacity: '1-6 people',
        availability: 'Daily 5 AM - 7 PM',
        certifications: ['Professional Wildlife Guide', 'Nature Photography Expert', 'Forest Department Licensed'],
        amenities: ['Professional Camera Gear', 'Telephoto Lenses', 'Wildlife Tracking', 'Photography Workshops'],
        tourTypes: ['Photography Safaris', 'Tiger Tracking', 'Night Safaris', 'Bird Photography']
      },
      {
        id: 'guide10',
        name: 'Deepak Singh - Forest Naturalist',
        category: 'Guides',
        subcategory: 'Wildlife & Nature',
        gender: 'Male',
        location: 'Palamau Tiger Reserve',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 178,
        price: 2200,
        priceUnit: 'per safari',
        languages: ['Hindi', 'English', 'Urdu'],
        experience: '12 years',
        age: 38,
        specialties: ['Forest Ecology', 'Animal Behavior', 'Conservation', 'Research Tours'],
        description: 'Forest department trained naturalist with deep knowledge of ecosystem conservation.',
        contact: '+91 9876543219',
        email: 'deepak.naturalist@jharkhand.com',
        capacity: '1-8 people',
        availability: 'Daily 5:30 AM - 6:30 PM',
        certifications: ['Forest Department Naturalist', 'Conservation Specialist', 'Research Guide'],
        amenities: ['Scientific Equipment', 'Field Research Tools', 'Conservation Education', 'Ecological Tours'],
        tourTypes: ['Research Safaris', 'Conservation Tours', 'Educational Programs', 'Scientific Expeditions']
      },

      // FEMALE WILDLIFE GUIDES
      {
        id: 'guide11',
        name: 'Dr. Pooja Sharma - Wildlife Biologist Guide',
        category: 'Guides',
        subcategory: 'Wildlife & Nature',
        gender: 'Female',
        location: 'Hazaribagh Wildlife Sanctuary',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 156,
        price: 2400,
        priceUnit: 'per safari',
        languages: ['Hindi', 'English'],
        experience: '10 years',
        age: 34,
        specialties: ['Wildlife Biology', 'Animal Behavior', 'Research Studies', 'Conservation'],
        description: 'PhD in Wildlife Biology with extensive research experience in Jharkhand\'s wildlife.',
        contact: '+91 9876543220',
        email: 'pooja.biologist@jharkhand.com',
        capacity: '1-10 people',
        availability: 'Daily 6 AM - 6 PM',
        certifications: ['PhD Wildlife Biology', 'Research Scientist', 'Conservation Expert'],
        amenities: ['Scientific Tours', 'Research Insights', 'Educational Programs', 'Conservation Awareness'],
        tourTypes: ['Scientific Safaris', 'Research Tours', 'Educational Expeditions', 'Conservation Programs']
      },
      {
        id: 'guide12',
        name: 'Rekha Devi - Bird Watching Expert',
        category: 'Guides',
        subcategory: 'Wildlife & Nature',
        gender: 'Female',
        location: 'Betla National Park',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 123,
        price: 1800,
        priceUnit: 'per day',
        languages: ['Hindi', 'English', 'Bengali'],
        experience: '8 years',
        age: 31,
        specialties: ['Bird Watching', 'Avian Photography', 'Migratory Patterns', 'Bird Calls'],
        description: 'Ornithology expert specializing in bird identification and behavior studies.',
        contact: '+91 9876543221',
        email: 'rekha.birds@jharkhand.com',
        capacity: '1-8 people',
        availability: 'Daily 5 AM - 6 PM',
        certifications: ['Ornithology Specialist', 'Bird Photography Expert', 'Nature Guide'],
        amenities: ['Bird Identification Guides', 'Binoculars', 'Photography Support', 'Bird Call Recognition'],
        tourTypes: ['Bird Watching Tours', 'Photography Expeditions', 'Migration Studies', 'Dawn Chorus Tours']
      },

      // RELIGIOUS & SPIRITUAL GUIDES
      {
        id: 'guide13',
        name: 'Pandit Ramesh Jha - Temple Guide',
        category: 'Guides',
        subcategory: 'Religious & Spiritual',
        gender: 'Male',
        location: 'Deoghar',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 289,
        price: 1200,
        priceUnit: 'per day',
        languages: ['Hindi', 'Bengali', 'Sanskrit', 'English'],
        experience: '20 years',
        age: 52,
        specialties: ['Temple Rituals', 'Religious History', 'Sanskrit Texts', 'Pilgrimage Routes'],
        description: 'Senior priest and scholar with deep knowledge of Baidyanath temple traditions.',
        contact: '+91 9876543222',
        email: 'pandit.ramesh@jharkhand.com',
        capacity: '1-25 people',
        availability: 'Daily 4 AM - 10 PM',
        certifications: ['Sanskrit Scholar', 'Temple Priest', 'Religious History Expert'],
        amenities: ['Religious Ceremonies', 'Prayer Guidance', 'Sacred Text Explanations', 'Ritual Participation'],
        tourTypes: ['Temple Tours', 'Pilgrimage Circuits', 'Religious Ceremonies', 'Spiritual Retreats']
      },
      {
        id: 'guide14',
        name: 'Sister Maria - Spiritual Retreat Guide',
        category: 'Guides',
        subcategory: 'Religious & Spiritual',
        gender: 'Female',
        location: 'Ranchi',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 167,
        price: 1400,
        priceUnit: 'per day',
        languages: ['Hindi', 'English', 'Bengali'],
        experience: '12 years',
        age: 38,
        specialties: ['Interfaith Tours', 'Meditation', 'Spiritual Counseling', 'Peace Studies'],
        description: 'Interfaith spiritual guide promoting harmony between different religious communities.',
        contact: '+91 9876543223',
        email: 'maria.spiritual@jharkhand.com',
        capacity: '1-20 people',
        availability: 'Daily 6 AM - 8 PM',
        certifications: ['Interfaith Studies', 'Meditation Teacher', 'Spiritual Counselor'],
        amenities: ['Meditation Sessions', 'Interfaith Dialogue', 'Spiritual Counseling', 'Peace Workshops'],
        tourTypes: ['Interfaith Tours', 'Meditation Retreats', 'Spiritual Journeys', 'Peace Pilgrimages']
      },

      // FOOD & CULINARY GUIDES
      {
        id: 'guide15',
        name: 'Chef Ajay Kumar - Culinary Expert',
        category: 'Guides',
        subcategory: 'Food & Culinary',
        gender: 'Male',
        location: 'Jamshedpur',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 198,
        price: 1800,
        priceUnit: 'per tour',
        languages: ['Hindi', 'English', 'Bengali'],
        experience: '15 years',
        age: 40,
        specialties: ['Tribal Cuisine', 'Street Food', 'Traditional Recipes', 'Cooking Classes'],
        description: 'Master chef specializing in authentic Jharkhand cuisine and traditional cooking methods.',
        contact: '+91 9876543224',
        email: 'chef.ajay@jharkhand.com',
        capacity: '1-15 people',
        availability: 'Daily 10 AM - 9 PM',
        certifications: ['Professional Chef', 'Culinary Arts Diploma', 'Traditional Cuisine Expert'],
        amenities: ['Cooking Classes', 'Market Tours', 'Recipe Sharing', 'Tasting Sessions'],
        tourTypes: ['Food Walking Tours', 'Cooking Workshops', 'Market Visits', 'Restaurant Tours']
      },
      {
        id: 'guide16',
        name: 'Sushila Devi - Home Cooking Expert',
        category: 'Guides',
        subcategory: 'Food & Culinary',
        gender: 'Female',
        location: 'Ranchi',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 142,
        price: 1600,
        priceUnit: 'per session',
        languages: ['Hindi', 'Bengali', 'Santhali'],
        experience: '25 years',
        age: 48,
        specialties: ['Home Cooking', 'Traditional Sweets', 'Pickle Making', 'Tribal Recipes'],
        description: 'Traditional home cook with generations of family recipes and tribal cooking techniques.',
        contact: '+91 9876543225',
        email: 'sushila.homecook@jharkhand.com',
        capacity: '1-8 people',
        availability: 'Daily 8 AM - 6 PM',
        certifications: ['Traditional Cooking Expert', 'Family Recipe Specialist'],
        amenities: ['Home Cooking Classes', 'Traditional Recipes', 'Family-style Meals', 'Cooking Tips'],
        tourTypes: ['Home Cooking Classes', 'Family Meal Experiences', 'Traditional Recipe Tours', 'Sweet Making Workshops']
      }
    ],
    homestays: [
      // TRIBAL & CULTURAL HOMESTAYS
      {
        id: 'homestay1',
        name: 'Authentic Santhali Tribal Homestay',
        category: 'Homestays',
        subcategory: 'Tribal & Cultural',
        location: 'Dumka - Santhali Village',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 187,
        price: 2800,
        priceUnit: 'per night',
        roomTypes: ['Traditional Mud Houses', 'Modern Tribal Huts', 'Community Halls'],
        capacity: '2-12 guests',
        totalRooms: 6,
        languages: ['Hindi', 'Santhali', 'Bengali'],
        hostFamily: 'Hembram Family - 4th Generation Santhali Hosts',
        specialties: ['Santhali Culture', 'Traditional Dance', 'Tribal Music', 'Handicrafts', 'Organic Farming'],
        description: 'Authentic Santhali tribal experience with traditional mud houses, cultural programs, and organic farming.',
        contact: '+91 9876543226',
        email: 'santhali.homestay@jharkhand.com',
        amenities: ['Traditional Architecture', 'Cultural Shows', 'Tribal Meals', 'Handicraft Learning', 'Organic Garden', 'Bonfire Evenings'],
        facilities: ['Attached Bathrooms', 'Solar Power', 'Traditional Toilets', 'Common Kitchen', 'Dining Hall', 'Cultural Center'],
        activities: ['Village Walks', 'Tribal Dance Learning', 'Handicraft Making', 'Organic Farming', 'Traditional Games', 'Story Telling'],
        meals: 'Traditional Santhali cuisine with organic ingredients',
        checkIn: '2:00 PM',
        checkOut: '11:00 AM',
        seasonalActivities: ['Harvest Season Programs', 'Festival Celebrations', 'Tribal Wedding Ceremonies'],
        nearbyAttractions: ['Massanjore Dam', 'Tribal Museum', 'Santhal Pargana University'],
        transportation: 'Village pickup available',
        bookingPolicy: 'Advance booking 7 days required',
        cancellationPolicy: '48 hours free cancellation'
      },
      {
        id: 'homestay2',
        name: 'Munda Heritage Village Stay',
        category: 'Homestays',
        subcategory: 'Tribal & Cultural',
        location: 'Khunti - Munda Village',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 142,
        price: 2600,
        priceUnit: 'per night',
        roomTypes: ['Traditional Huts', 'Village Cottages'],
        capacity: '2-10 guests',
        totalRooms: 5,
        languages: ['Hindi', 'Munda', 'Ho'],
        hostFamily: 'Topno Family - Traditional Munda Leaders',
        specialties: ['Munda Traditions', 'Sacred Groves', 'Traditional Healing', 'Tribal Governance'],
        description: 'Experience authentic Munda tribal life with sacred grove visits and traditional healing practices.',
        contact: '+91 9876543227',
        email: 'munda.heritage@jharkhand.com',
        amenities: ['Sacred Grove Tours', 'Traditional Healing', 'Munda Music', 'Tribal Council Meetings', 'Forest Walks'],
        facilities: ['Eco-friendly Bathrooms', 'Solar Heating', 'Traditional Cooking', 'Herbal Garden', 'Community Hall'],
        activities: ['Sacred Grove Visits', 'Traditional Healing Sessions', 'Munda Music Learning', 'Forest Meditation', 'Tribal Governance'],
        meals: 'Traditional Munda cuisine with medicinal herbs',
        checkIn: '1:00 PM',
        checkOut: '12:00 PM',
        seasonalActivities: ['Sarhul Festival', 'Karma Festival', 'Harvest Celebrations'],
        nearbyAttractions: ['Birsa Munda Museum', 'Sacred Groves', 'Traditional Markets'],
        transportation: 'Jeep pickup from Khunti',
        bookingPolicy: 'Cultural orientation required',
        cancellationPolicy: '72 hours notice required'
      },
      {
        id: 'homestay3',
        name: 'Ho Tribal Cultural Center',
        category: 'Homestays',
        subcategory: 'Tribal & Cultural',
        location: 'West Singhbhum - Ho Village',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 98,
        price: 2400,
        priceUnit: 'per night',
        roomTypes: ['Traditional Ho Houses', 'Cultural Dormitories'],
        capacity: '2-15 guests',
        totalRooms: 8,
        languages: ['Hindi', 'Ho', 'Bengali'],
        hostFamily: 'Bodra Family - Ho Cultural Preservationists',
        specialties: ['Ho Culture', 'Traditional Metallurgy', 'Iron Working', 'Tribal Art'],
        description: 'Unique homestay showcasing Ho tribal metallurgy traditions and iron-working skills.',
        contact: '+91 9876543228',
        email: 'ho.cultural@jharkhand.com',
        amenities: ['Metallurgy Workshops', 'Iron Working Demos', 'Traditional Crafts', 'Cultural Programs'],
        facilities: ['Traditional Bathrooms', 'Workshop Areas', 'Cultural Museum', 'Craft Center'],
        activities: ['Iron Working Classes', 'Ho Dance Learning', 'Craft Making'],
        meals: 'Ho tribal cuisine with traditional cooking methods',
        checkIn: '2:00 PM',
        checkOut: '11:00 AM',
        seasonalActivities: ['Maghe Festival', 'Traditional Fairs', 'Craft Exhibitions'],
        nearbyAttractions: ['Traditional Smithies', 'Ho Cultural Museum', 'Ancient Mines'],
        transportation: 'Village transport provided',
        bookingPolicy: 'Minimum 2 nights stay',
        cancellationPolicy: '48 hours free cancellation'
      },

      // HILL STATION HOMESTAYS
      {
        id: 'homestay4',
        name: 'Netarhat Sunrise Palace Homestay',
        category: 'Homestays',
        subcategory: 'Hill Station',
        location: 'Netarhat Hills - Queen of Chotanagpur',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 234,
        price: 3500,
        priceUnit: 'per night',
        roomTypes: ['Sunrise View Suites', 'Valley View Rooms', 'Luxury Hill Cottages'],
        capacity: '2-16 guests',
        totalRooms: 8,
        languages: ['Hindi', 'English', 'Bengali'],
        hostFamily: 'Singh Family - 3rd Generation Hill Station Hosts',
        specialties: ['Sunrise Views', 'Hill Station Tours', 'Photography', 'Colonial History'],
        description: 'Premium hill station homestay with panoramic sunrise views and colonial-era charm.',
        contact: '+91 9876543229',
        email: 'netarhat.sunrise@jharkhand.com',
        amenities: ['Sunrise Viewpoints', 'Photography Equipment', 'Telescope', 'Library', 'Fireplace', 'Terrace Garden'],
        facilities: ['Luxury Bathrooms', 'Central Heating', 'WiFi', 'Room Service', 'Conference Room', 'Parking'],
        activities: ['Sunrise Tours', 'Photography Walks', 'Nature Trails', 'Star Gazing', 'Colonial Heritage Tours'],
        meals: 'Multi-cuisine with local hill specialties',
        checkIn: '2:00 PM',
        checkOut: '12:00 PM',
        seasonalActivities: ['Winter Bonfire Nights', 'Monsoon Photography', 'Summer Hill Festivals'],
        nearbyAttractions: ['Netarhat Sunrise Point', 'Magnolia Point', 'Lower Ghaghri Falls'],
        transportation: 'Airport/Station pickup available',
        bookingPolicy: 'Advance booking recommended for peak season',
        cancellationPolicy: '24 hours free cancellation'
      },
      {
        id: 'homestay5',
        name: 'Ranchi Hills Heritage Home',
        category: 'Homestays',
        subcategory: 'Hill Station',
        location: 'Ranchi Hill - Rock Garden Area',
        image: '/api/placeholder/400/300',
        rating: 4.6,
        reviewCount: 167,
        price: 3200,
        priceUnit: 'per night',
        roomTypes: ['Heritage Rooms', 'Garden Suites', 'Hill View Cottages'],
        capacity: '2-12 guests',
        totalRooms: 6,
        languages: ['Hindi', 'English', 'Bengali', 'Urdu'],
        hostFamily: 'Verma Family - Former Colonial Officers',
        specialties: ['Colonial Architecture', 'Rock Garden Tours', 'City Views', 'Heritage Walks'],
        description: 'Colonial-era homestay near famous Rock Garden with heritage architecture and city views.',
        contact: '+91 9876543230',
        email: 'ranchi.heritage@jharkhand.com',
        amenities: ['Heritage Architecture', 'City Views', 'Garden Walks', 'Colonial Artifacts', 'Reading Room'],
        facilities: ['Period Bathrooms', 'AC Rooms', 'WiFi', 'Dining Hall', 'Heritage Museum', 'Garden'],
        activities: ['Heritage Walks', 'Rock Garden Visits', 'City Tours', 'Museum Visits', 'Architecture Tours'],
        meals: 'Continental and Indian cuisine',
        checkIn: '1:00 PM',
        checkOut: '11:00 AM',
        seasonalActivities: ['Heritage Festivals', 'Garden Shows', 'Cultural Programs'],
        nearbyAttractions: ['Rock Garden', 'Ranchi Lake', 'Jagannath Temple', 'State Museum'],
        transportation: 'City transport and guides available',
        bookingPolicy: 'Same day booking available',
        cancellationPolicy: '12 hours notice required'
      },

      // LAKESIDE & WATERFRONT HOMESTAYS
      {
        id: 'homestay6',
        name: 'Patratu Lake Resort Homestay',
        category: 'Homestays',
        subcategory: 'Lakeside & Waterfront',
        location: 'Patratu Valley - Dam Lake',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 198,
        price: 3800,
        priceUnit: 'per night',
        roomTypes: ['Lake View Suites', 'Floating Cottages', 'Beach Huts'],
        capacity: '2-14 guests',
        totalRooms: 7,
        languages: ['Hindi', 'English', 'Bengali'],
        hostFamily: 'Mahato Family - Lake Tourism Pioneers',
        specialties: ['Water Sports', 'Boat Rides', 'Fishing', 'Lake Photography'],
        description: 'Unique lakeside homestay with floating cottages and comprehensive water sports facilities.',
        contact: '+91 9876543231',
        email: 'patratu.resort@jharkhand.com',
        amenities: ['Private Beach', 'Water Sports Equipment', 'Boat Rides', 'Fishing Gear', 'Lake Views', 'Sunset Points'],
        facilities: ['Lake-facing Bathrooms', 'Water Heaters', 'Boat Dock', 'Sports Equipment', 'Restaurant', 'Event Hall'],
        activities: ['Boating', 'Kayaking', 'Fishing', 'Swimming', 'Water Skiing', 'Lake Photography', 'Sunset Cruises'],
        meals: 'Fresh lake fish specialties and continental cuisine',
        checkIn: '2:00 PM',
        checkOut: '12:00 PM',
        seasonalActivities: ['Monsoon Lake Views', 'Winter Fishing', 'Summer Water Sports'],
        nearbyAttractions: ['Patratu Dam', 'Valley Viewpoints', 'Tribal Villages'],
        transportation: 'Boat transfers available',
        bookingPolicy: 'Water sports package available',
        cancellationPolicy: '48 hours notice for full refund'
      },
      {
        id: 'homestay7',
        name: 'Maithon Lake Floating Homestay',
        category: 'Homestays',
        subcategory: 'Lakeside & Waterfront',
        location: 'Dhanbad - Maithon Dam',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 134,
        price: 3600,
        priceUnit: 'per night',
        roomTypes: ['Floating Rooms', 'Lake Cottages', 'Boat Houses'],
        capacity: '2-10 guests',
        totalRooms: 5,
        languages: ['Hindi', 'English', 'Bengali'],
        hostFamily: 'Das Family - Marine Engineers turned Hosts',
        specialties: ['Floating Architecture', 'Lake Engineering', 'Water Conservation', 'Aquaculture'],
        description: 'Innovative floating homestay built by marine engineers with sustainable water living.',
        contact: '+91 9876543232',
        email: 'maithon.floating@jharkhand.com',
        amenities: ['Floating Rooms', 'Solar Power', 'Rain Water Harvesting', 'Fish Farming', 'Lake Library'],
        facilities: ['Eco Bathrooms', 'Solar Heating', 'Composting', 'Water Purification', 'Floating Deck'],
        activities: ['Floating Architecture Tours', 'Sustainable Living Education', 'Fish Farming', 'Solar Energy Tours'],
        meals: 'Fresh fish and organic vegetables from own farm',
        checkIn: '1:00 PM',
        checkOut: '11:00 AM',
        seasonalActivities: ['Monsoon Lake Experience', 'Winter Bird Watching', 'Summer Solar Tours'],
        nearbyAttractions: ['Maithon Dam', 'Coal Mines Tours', 'Engineering Marvels'],
        transportation: 'Boat shuttle from mainland',
        bookingPolicy: 'Eco-tourism orientation required',
        cancellationPolicy: 'Weather dependent cancellations allowed'
      },

      // ECO & FOREST HOMESTAYS
      {
        id: 'homestay8',
        name: 'Simdega Eco Forest Retreat',
        category: 'Homestays',
        subcategory: 'Eco & Forest',
        location: 'Simdega Forest Reserve',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 156,
        price: 4200,
        priceUnit: 'per night',
        roomTypes: ['Tree Houses', 'Forest Cottages', 'Canopy Suites'],
        capacity: '2-8 guests',
        totalRooms: 4,
        languages: ['Hindi', 'English', 'Oraon'],
        hostFamily: 'Ekka Family - Forest Conservation Experts',
        specialties: ['Eco Tourism', 'Forest Conservation', 'Tree House Living', 'Wildlife Research'],
        description: 'Premium eco-resort with tree houses and zero-waste forest living experience.',
        contact: '+91 9876543233',
        email: 'simdega.eco@jharkhand.com',
        amenities: ['Tree House Living', 'Solar Power', 'Rainwater Harvesting', 'Organic Gardens', 'Wildlife Observatory'],
        facilities: ['Composting Toilets', 'Solar Heating', 'Natural Materials', 'Water Recycling', 'Research Center'],
        activities: ['Tree House Tours', 'Forest Research', 'Wildlife Photography', 'Organic Farming', 'Conservation Work'],
        meals: 'Organic forest produce and medicinal plants cuisine',
        checkIn: '12:00 PM',
        checkOut: '11:00 AM',
        seasonalActivities: ['Monsoon Forest Walks', 'Winter Wildlife Spotting', 'Summer Canopy Research'],
        nearbyAttractions: ['Reserved Forests', 'Wildlife Corridors', 'Tribal Villages'],
        transportation: 'Forest department vehicle required',
        bookingPolicy: 'Forest permits mandatory',
        cancellationPolicy: 'Weather and wildlife activity dependent'
      },
      {
        id: 'homestay9',
        name: 'Hazaribagh Forest Lodge Homestay',
        category: 'Homestays',
        subcategory: 'Eco & Forest',
        location: 'Hazaribagh National Park Buffer Zone',
        image: '/api/placeholder/400/300',
        rating: 4.6,
        reviewCount: 123,
        price: 3400,
        priceUnit: 'per night',
        roomTypes: ['Forest Lodges', 'Wildlife Huts', 'Research Cabins'],
        capacity: '2-12 guests',
        totalRooms: 6,
        languages: ['Hindi', 'English', 'Bengali'],
        hostFamily: 'Sinha Family - Wildlife Researchers',
        specialties: ['Wildlife Research', 'Forest Ecology', 'Bird Watching', 'Conservation Education'],
        description: 'Research-oriented forest homestay with wildlife observation facilities and educational programs.',
        contact: '+91 9876543234',
        email: 'hazaribagh.forest@jharkhand.com',
        amenities: ['Wildlife Observatory', 'Research Library', 'Scientific Equipment', 'Nature Trails', 'Bird Hides'],
        facilities: ['Field Station', 'Research Lab', 'Wildlife Cameras', 'Data Collection', 'Reference Library'],
        activities: ['Wildlife Research Participation', 'Bird Ringing', 'Camera Trapping', 'Data Collection', 'Conservation Projects'],
        meals: 'Field rations and traditional forest cuisine',
        checkIn: '6:00 AM',
        checkOut: '6:00 PM',
        seasonalActivities: ['Monsoon Research', 'Winter Migration Studies', 'Summer Breeding Surveys'],
        nearbyAttractions: ['Hazaribagh National Park', 'Konar Dam', 'Canary Hill'],
        transportation: 'Forest department coordination required',
        bookingPolicy: 'Research participation mandatory',
        cancellationPolicy: 'Research schedule dependent'
      },

      // HERITAGE & PALACE HOMESTAYS
      {
        id: 'homestay10',
        name: 'Hazaribagh Royal Palace Homestay',
        category: 'Homestays',
        subcategory: 'Heritage & Palace',
        location: 'Hazaribagh - Former Zamindari Palace',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 267,
        price: 5200,
        priceUnit: 'per night',
        roomTypes: ['Royal Suites', 'Palace Rooms', 'Heritage Chambers', 'Royal Gardens'],
        capacity: '2-20 guests',
        totalRooms: 10,
        languages: ['Hindi', 'English', 'Urdu', 'Bengali'],
        hostFamily: 'Singh Family - Former Royal Family',
        specialties: ['Royal Hospitality', 'Palace Architecture', 'Historical Tours', 'Cultural Performances'],
        description: 'Authentic royal palace experience with 200-year-old architecture and royal family hospitality.',
        contact: '+91 9876543235',
        email: 'palace.hazaribagh@jharkhand.com',
        amenities: ['Royal Architecture', 'Palace Museum', 'Cultural Shows', 'Royal Dining', 'Heritage Library', 'Royal Gardens'],
        facilities: ['Palace Bathrooms', 'Royal Furniture', 'Heritage Artifacts', 'Darbar Hall', 'Royal Kitchen', 'Stable Yards'],
        activities: ['Palace Tours', 'Royal History Sessions', 'Cultural Performances', 'Heritage Walks', 'Royal Cuisine Classes'],
        meals: 'Royal Mughlai and traditional cuisine',
        checkIn: '3:00 PM',
        checkOut: '12:00 PM',
        seasonalActivities: ['Royal Festival Celebrations', 'Heritage Fairs', 'Cultural Performances'],
        nearbyAttractions: ['Historical Monuments', 'Royal Temples', 'Heritage Markets'],
        transportation: 'Royal car service available',
        bookingPolicy: 'Dress code for dinner required',
        cancellationPolicy: '72 hours notice required'
      },
      {
        id: 'homestay11',
        name: 'Gumla Heritage Mansion',
        category: 'Homestays',
        subcategory: 'Heritage & Palace',
        location: 'Gumla - Colonial Era Mansion',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 178,
        price: 4500,
        priceUnit: 'per night',
        roomTypes: ['Colonial Suites', 'Victorian Rooms', 'Heritage Halls'],
        capacity: '2-16 guests',
        totalRooms: 8,
        languages: ['Hindi', 'English'],
        hostFamily: 'Topno Family - Colonial Era Descendants',
        specialties: ['Colonial Architecture', 'British Era History', 'Victorian Lifestyle', 'Period Furniture'],
        description: 'Restored colonial mansion with original Victorian furniture and British-era architecture.',
        contact: '+91 9876543236',
        email: 'gumla.heritage@jharkhand.com',
        amenities: ['Colonial Architecture', 'Period Furniture', 'Victorian Gardens', 'Heritage Museum', 'Library'],
        facilities: ['Victorian Bathrooms', 'Period Fixtures', 'Heritage Dining', 'Colonial Artifacts', 'Garden Pavilions'],
        activities: ['Colonial History Tours', 'Victorian Tea Sessions', 'Heritage Architecture Walks', 'Period Music Evenings'],
        meals: 'British-Indian fusion cuisine',
        checkIn: '2:00 PM',
        checkOut: '11:00 AM',
        seasonalActivities: ['Colonial Festival', 'Heritage Week', 'Victorian Christmas'],
        nearbyAttractions: ['Colonial Churches', 'British Cemeteries', 'Heritage Buildings'],
        transportation: 'Vintage car tours available',
        bookingPolicy: 'Heritage orientation provided',
        cancellationPolicy: '48 hours free cancellation'
      },

      // WELLNESS & SPIRITUAL HOMESTAYS
      {
        id: 'homestay12',
        name: 'Deoghar Spiritual Retreat Center',
        category: 'Homestays',
        subcategory: 'Wellness & Spiritual',
        location: 'Deoghar - Near Baidyanath Temple',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 234,
        price: 2800,
        priceUnit: 'per night',
        roomTypes: ['Meditation Rooms', 'Spiritual Suites', 'Ashram Dormitories'],
        capacity: '2-25 guests',
        totalRooms: 12,
        languages: ['Hindi', 'Bengali', 'Sanskrit', 'English'],
        hostFamily: 'Sharma Family - 3rd Generation Spiritual Hosts',
        specialties: ['Spiritual Tourism', 'Meditation', 'Yoga', 'Temple Visits', 'Pilgrimage Tours'],
        description: 'Spiritual retreat center near sacred Baidyanath temple with meditation and wellness programs.',
        contact: '+91 9876543237',
        email: 'deoghar.spiritual@jharkhand.com',
        amenities: ['Meditation Halls', 'Yoga Studios', 'Prayer Rooms', 'Spiritual Library', 'Temple Access', 'Guru Sessions'],
        facilities: ['Simple Bathrooms', 'Vegetarian Kitchen', 'Prayer Halls', 'Reading Rooms', 'Meditation Gardens'],
        activities: ['Morning Prayers', 'Yoga Sessions', 'Meditation Classes', 'Temple Visits', 'Spiritual Discourses', 'Chanting'],
        meals: 'Vegetarian sattvic cuisine only',
        checkIn: '4:00 AM',
        checkOut: '10:00 PM',
        seasonalActivities: ['Shravan Month Specials', 'Shivratri Celebrations', 'Sacred Festivals'],
        nearbyAttractions: ['Baidyanath Temple', 'Naulakha Mandir', 'Tapovan'],
        transportation: 'Temple vicinity walking distance',
        bookingPolicy: 'Spiritual discipline required',
        cancellationPolicy: 'Festival season restrictions apply'
      },
      {
        id: 'homestay13',
        name: 'Rajrappa Ayurvedic Wellness Home',
        category: 'Homestays',
        subcategory: 'Wellness & Spiritual',
        location: 'Rajrappa - Temple Complex Area',
        image: '/api/placeholder/400/300',
        rating: 4.6,
        reviewCount: 145,
        price: 3200,
        priceUnit: 'per night',
        roomTypes: ['Wellness Suites', 'Therapy Rooms', 'Ayurvedic Chambers'],
        capacity: '2-12 guests',
        totalRooms: 6,
        languages: ['Hindi', 'English', 'Bengali'],
        hostFamily: 'Vaidya Family - Traditional Ayurvedic Practitioners',
        specialties: ['Ayurvedic Treatments', 'Herbal Medicine', 'Wellness Therapies', 'Meditation'],
        description: 'Ayurvedic wellness center offering traditional treatments with qualified vaidyas and herbal gardens.',
        contact: '+91 9876543238',
        email: 'rajrappa.ayurveda@jharkhand.com',
        amenities: ['Ayurvedic Treatments', 'Herbal Gardens', 'Therapy Centers', 'Meditation Areas', 'Yoga Studios'],
        facilities: ['Treatment Rooms', 'Herbal Kitchen', 'Medicine Preparation', 'Consultation Rooms', 'Wellness Library'],
        activities: ['Ayurvedic Consultations', 'Herbal Medicine Preparation', 'Wellness Therapies', 'Garden Tours', 'Yoga Classes'],
        meals: 'Ayurvedic diet based on individual constitution',
        checkIn: '10:00 AM',
        checkOut: '10:00 AM',
        seasonalActivities: ['Monsoon Panchakarma', 'Winter Wellness Programs', 'Spring Detox'],
        nearbyAttractions: ['Rajrappa Temple', 'Chinnamasta Temple', 'Damodar River'],
        transportation: 'Temple town connectivity',
        bookingPolicy: 'Health consultation mandatory',
        cancellationPolicy: 'Treatment schedule dependent'
      }
    ],
    transport: [
      // LUXURY & PREMIUM CARS
      {
        id: 'transport1',
        name: 'Royal Luxury Car Services',
        category: 'Transport',
        subcategory: 'Luxury Cars',
        vehicleType: 'Premium Sedan',
        location: 'Ranchi',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 234,
        price: 4500,
        priceUnit: 'per day',
        vehicles: ['Mercedes E-Class', 'BMW 5 Series', 'Audi A6', 'Toyota Camry'],
        capacity: '4 passengers + driver',
        fuelType: 'Petrol/Hybrid',
        features: ['Premium Interior', 'Professional Chauffeur', 'WiFi', 'Refreshments', 'Climate Control'],
        description: 'Premium luxury car service with professional chauffeurs for business and VIP tourism.',
        contact: '+91 9876543250',
        email: 'luxury.cars@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: true,
        driverDetails: 'Trained professional chauffeurs with 10+ years experience',
        pickupLocations: ['Airport VIP Terminal', '5-Star Hotels', 'Corporate Offices', 'Custom Locations'],
        serviceArea: 'Pan Jharkhand + Neighboring States',
        availability: '24/7 Premium Service',
        bookingPolicy: 'Advance booking 24 hours recommended',
        amenities: ['Premium Leather Seats', 'Mini Bar', 'Entertainment System', 'Phone Chargers', 'Newspapers', 'Magazines'],
        additionalServices: ['Airport Meet & Greet', 'Corporate Events', 'Wedding Transportation', 'VIP Transfers'],
        insuranceCoverage: 'Comprehensive insurance included',
        fuelPolicy: 'All fuel charges included in price',
        extraCharges: 'Night charges: 25% extra after 10 PM'
      },
      {
        id: 'transport2',
        name: 'Executive SUV Rentals',
        category: 'Transport',
        subcategory: 'Luxury Cars',
        vehicleType: 'Luxury SUV',
        location: 'Jamshedpur',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 189,
        price: 5200,
        priceUnit: 'per day',
        vehicles: ['Toyota Fortuner', 'Ford Endeavour', 'Mahindra Alturas', 'Isuzu MU-X'],
        capacity: '7 passengers + driver',
        fuelType: 'Diesel',
        features: ['4WD Capability', 'Premium Interior', 'Entertainment System', 'Safety Features'],
        description: 'Executive SUV service for corporate travel and luxury family tours with experienced drivers.',
        contact: '+91 9876543251',
        email: 'executive.suv@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: true,
        driverDetails: 'Corporate trained drivers with defensive driving certification',
        pickupLocations: ['Steel City Hotels', 'Corporate Parks', 'Airport', 'Railway Stations'],
        serviceArea: 'Jharkhand + Eastern India',
        availability: '24/7 Executive Service',
        bookingPolicy: 'Corporate accounts available',
        amenities: ['Executive Seating', 'Cooler', 'USB Charging', 'Reading Lights', 'Privacy Glass'],
        additionalServices: ['Corporate Packages', 'Multi-city Tours', 'Industrial Visits', 'Executive Meetings'],
        insuranceCoverage: 'Commercial vehicle insurance',
        fuelPolicy: 'Fuel included up to 300 km/day',
        extraCharges: 'Extra km: ₹15/km, Driver allowance for outstation'
      },

      // ADVENTURE & OFFROAD VEHICLES
      {
        id: 'transport3',
        name: 'Adventure Off-Road Vehicles',
        category: 'Transport',
        subcategory: 'Adventure & Off-Road',
        vehicleType: 'Off-Road SUV',
        location: 'Netarhat',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 167,
        price: 3500,
        priceUnit: 'per day',
        vehicles: ['Mahindra Thar', 'Force Gurkha', 'Isuzu V-Cross', 'Toyota Hilux'],
        capacity: '6-8 passengers',
        fuelType: 'Diesel',
        features: ['4x4 Capability', 'High Ground Clearance', 'Adventure Accessories', 'GPS Navigation'],
        description: 'Specialized off-road vehicles for adventure tourism and hill station exploration.',
        contact: '+91 9876543252',
        email: 'adventure.offroad@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: false,
        driverDetails: 'Adventure driving specialists with hill station expertise',
        pickupLocations: ['Netarhat Base Camp', 'Adventure Resorts', 'Trekking Points'],
        serviceArea: 'Netarhat Hills + Chota Nagpur Plateau',
        availability: 'Daylight hours for safety',
        bookingPolicy: 'Adventure experience waiver required',
        amenities: ['Roll Cage', 'Safety Harnesses', 'First Aid Kit', 'Communication Equipment', 'Adventure Gear Storage'],
        additionalServices: ['Adventure Tours', 'Photography Expeditions', 'Camping Trips', 'Trekking Support'],
        insuranceCoverage: 'Adventure sports insurance available',
        fuelPolicy: 'Fuel charges separate as per consumption',
        extraCharges: 'Difficult terrain: ₹500 extra, Night charges not available'
      },
      {
        id: 'transport4',
        name: 'Jungle Safari Vehicles',
        category: 'Transport',
        subcategory: 'Adventure & Off-Road',
        vehicleType: 'Open Safari Jeep',
        location: 'Betla National Park',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 298,
        price: 2200,
        priceUnit: 'per safari',
        vehicles: ['Modified Mahindra Bolero', 'Tata Safari', 'Open Jeep Gypsy'],
        capacity: '6 passengers + guide + driver',
        fuelType: 'Diesel',
        features: ['Open Top Design', 'Silent Engine Modification', 'Wildlife Photography Support', 'Binoculars'],
        description: 'Specialized wildlife safari vehicles with expert naturalists and photography support.',
        contact: '+91 9876543253',
        email: 'safari.vehicles@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: true,
        driverDetails: 'Forest department certified drivers with wildlife knowledge',
        pickupLocations: ['Park Entry Gates', 'Forest Rest Houses', 'Eco Tourism Centers'],
        serviceArea: 'Betla, Palamau, Hazaribagh National Parks',
        availability: 'Forest department safari timings only',
        bookingPolicy: 'Forest entry permits mandatory',
        amenities: ['Professional Binoculars', 'Wildlife Guide Books', 'Photography Support', 'Silent Engines', 'Safety Equipment'],
        additionalServices: ['Photography Tours', 'Night Safari', 'Bird Watching', 'Nature Education'],
        insuranceCoverage: 'Forest department approved insurance',
        fuelPolicy: 'All charges included in safari price',
        extraCharges: 'Camera charges as per forest rules'
      },

      // BIKES & TWO WHEELERS
      {
        id: 'transport5',
        name: 'Royal Enfield Adventure Rentals',
        category: 'Transport',
        subcategory: 'Bikes & Two-Wheeler',
        vehicleType: 'Adventure Motorcycle',
        location: 'Ranchi',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 223,
        price: 1200,
        priceUnit: 'per day',
        vehicles: ['Royal Enfield Himalayan', 'Royal Enfield Classic 350', 'Royal Enfield Interceptor 650'],
        capacity: '2 passengers (rider + pillion)',
        fuelType: 'Petrol',
        features: ['Adventure Ready', 'Long Distance Comfort', 'Panniers', 'GPS Mount'],
        description: 'Premium Royal Enfield rentals for motorcycle touring and hill station exploration.',
        contact: '+91 9876543254',
        email: 'royalenfield.rentals@jharkhand.com',
        driverIncluded: false,
        fuelIncluded: false,
        driverDetails: 'Self-ride only (Valid license required)',
        pickupLocations: ['City Center Showroom', 'Major Hotels', 'Railway Station', 'Airport'],
        serviceArea: 'Jharkhand + Neighboring Hill Stations',
        availability: '7 AM - 7 PM (No night riding)',
        bookingPolicy: 'Valid motorcycle license mandatory',
        amenities: ['Premium Helmets', 'Riding Jackets', 'Gloves', 'Tool Kit', 'Puncture Kit', 'Route Maps'],
        additionalServices: ['Guided Tours', 'Motorcycle Training', 'Route Planning', 'Emergency Support'],
        insuranceCoverage: 'Comprehensive bike insurance included',
        fuelPolicy: 'Tenant responsible for fuel costs',
        extraCharges: 'Security deposit: ₹10,000, Extra km: ₹5/km'
      },
      {
        id: 'transport6',
        name: 'Eco-Friendly E-Bikes',
        category: 'Transport',
        subcategory: 'Bikes & Two-Wheeler',
        vehicleType: 'Electric Bike',
        location: 'Deoghar',
        image: '/api/placeholder/400/300',
        rating: 4.6,
        reviewCount: 134,
        price: 600,
        priceUnit: 'per day',
        vehicles: ['Hero Electric Optima', 'Ather 450X', 'TVS iQube', 'Bajaj Chetak'],
        capacity: '2 passengers',
        fuelType: 'Electric',
        features: ['Zero Emission', 'Silent Operation', 'Fast Charging', 'Digital Display'],
        description: 'Eco-friendly electric bike rentals for sustainable city and temple town exploration.',
        contact: '+91 9876543255',
        email: 'ebike.rentals@jharkhand.com',
        driverIncluded: false,
        fuelIncluded: true,
        driverDetails: 'Self-ride with basic training provided',
        pickupLocations: ['Temple Area', 'Hotel Pickup', 'Charging Stations'],
        serviceArea: 'Deoghar City + Temple Circuit',
        availability: 'Daily 6 AM - 8 PM',
        bookingPolicy: 'Environment awareness session included',
        amenities: ['Charging Kit', 'Safety Helmets', 'Phone Mount', 'Storage Box', 'Route Guide'],
        additionalServices: ['Charging Support', 'Temple Tour Routes', 'Eco Tourism', 'City Guides'],
        insuranceCoverage: 'Electric vehicle insurance',
        fuelPolicy: 'Charging costs included in rental',
        extraCharges: 'Battery replacement: ₹200, Extended hours: ₹50/hour'
      },

      // GROUP TRANSPORT
      {
        id: 'transport7',
        name: 'Deluxe Tempo Traveller Services',
        category: 'Transport',
        subcategory: 'Group Transport',
        vehicleType: 'Luxury Tempo Traveller',
        location: 'Ranchi',
        image: '/api/placeholder/400/300',
        rating: 4.7,
        reviewCount: 267,
        price: 6500,
        priceUnit: 'per day',
        vehicles: ['Force Urbania 13-Seater', 'Mahindra Marazzo 9-Seater', 'Tempo Traveller 17-Seater'],
        capacity: '9-17 passengers',
        fuelType: 'Diesel',
        features: ['AC', 'Comfortable Seating', 'Entertainment System', 'Luggage Space'],
        description: 'Luxury tempo traveller service for group tours, family trips, and corporate travel.',
        contact: '+91 9876543256',
        email: 'tempo.deluxe@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: true,
        driverDetails: 'Professional drivers experienced in group travel',
        pickupLocations: ['Hotels', 'Airport', 'Railway Stations', 'Custom Locations'],
        serviceArea: 'All Jharkhand + Multi-state Tours',
        availability: '24/7 Group Travel Service',
        bookingPolicy: 'Group bookings 48 hours advance',
        amenities: ['Individual AC Vents', 'USB Charging', 'Entertainment Screen', 'Cooler', 'First Aid', 'Reading Lights'],
        additionalServices: ['Group Tour Packages', 'Corporate Events', 'Wedding Transportation', 'Pilgrimage Tours'],
        insuranceCoverage: 'Passenger insurance included',
        fuelPolicy: 'All fuel charges included',
        extraCharges: 'Driver allowance for outstation: ₹500/day, Toll/parking extra'
      },
      {
        id: 'transport8',
        name: 'Mini Bus Charter Services',
        category: 'Transport',
        subcategory: 'Group Transport',
        vehicleType: 'Mini Bus',
        location: 'Jamshedpur',
        image: '/api/placeholder/400/300',
        rating: 4.5,
        reviewCount: 178,
        price: 8500,
        priceUnit: 'per day',
        vehicles: ['Tata LP 909 27-Seater', 'Ashok Leyland 35-Seater', 'Eicher 20-Seater'],
        capacity: '20-35 passengers',
        fuelType: 'Diesel',
        features: ['High Capacity', 'Luggage Compartment', 'PA System', 'Emergency Exits'],
        description: 'Mini bus charter for large group transportation, educational tours, and corporate events.',
        contact: '+91 9876543257',
        email: 'minibus.charter@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: true,
        driverDetails: 'Commercial vehicle licensed drivers',
        pickupLocations: ['Educational Institutions', 'Corporate Offices', 'Large Hotels', 'Event Venues'],
        serviceArea: 'Eastern India Charter Services',
        availability: '24/7 Charter Service',
        bookingPolicy: 'Charter agreement required',
        amenities: ['Public Address System', 'Comfortable Seating', 'Overhead Storage', 'Emergency Kit', 'Fire Extinguisher'],
        additionalServices: ['Educational Tours', 'Industrial Visits', 'Large Group Events', 'Multi-day Charters'],
        insuranceCoverage: 'Commercial passenger insurance',
        fuelPolicy: 'Fuel included for standard distances',
        extraCharges: 'Extra km: ₹25/km, Permit charges for other states'
      },

      // BUDGET & ECONOMY
      {
        id: 'transport9',
        name: 'Economy Car Rentals',
        category: 'Transport',
        subcategory: 'Budget & Economy',
        vehicleType: 'Economy Sedan',
        location: 'Dhanbad',
        image: '/api/placeholder/400/300',
        rating: 4.4,
        reviewCount: 234,
        price: 1800,
        priceUnit: 'per day',
        vehicles: ['Maruti Swift Dzire', 'Hyundai Xcent', 'Tata Tigor', 'Honda Amaze'],
        capacity: '4 passengers + driver',
        fuelType: 'Petrol/CNG',
        features: ['Fuel Efficient', 'Comfortable Seating', 'AC', 'Basic Safety Features'],
        description: 'Budget-friendly car rental service for economical city travel and short trips.',
        contact: '+91 9876543258',
        email: 'economy.cars@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: false,
        driverDetails: 'Local drivers with city knowledge',
        pickupLocations: ['Railway Station', 'Bus Stand', 'Budget Hotels', 'City Center'],
        serviceArea: 'Local city + nearby districts',
        availability: '6 AM - 10 PM Daily',
        bookingPolicy: 'Same day booking available',
        amenities: ['Basic AC', 'Phone Charger', 'City Maps', 'Water Bottles'],
        additionalServices: ['City Tours', 'Airport Transfers', 'Shopping Trips', 'Local Sightseeing'],
        insuranceCoverage: 'Third party insurance',
        fuelPolicy: 'Fuel charges separate as per meter',
        extraCharges: 'Waiting charges: ₹50/hour, Night charges: 20% extra'
      },
      {
        id: 'transport10',
        name: 'Shared Auto Rickshaw Tours',
        category: 'Transport',
        subcategory: 'Budget & Economy',
        vehicleType: 'Auto Rickshaw',
        location: 'Ranchi',
        image: '/api/placeholder/400/300',
        rating: 4.2,
        reviewCount: 189,
        price: 400,
        priceUnit: 'per hour',
        vehicles: ['Bajaj Auto Rickshaw', 'TVS King', 'Mahindra Alfa'],
        capacity: '3 passengers',
        fuelType: 'CNG/Petrol',
        features: ['Local Experience', 'Affordable', 'City Navigation', 'Cultural Interaction'],
        description: 'Authentic local auto rickshaw tours for budget travelers and cultural experiences.',
        contact: '+91 9876543259',
        email: 'auto.tours@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: true,
        driverDetails: 'Local auto drivers with city expertise',
        pickupLocations: ['Major Markets', 'Tourist Spots', 'Hotels', 'Railway Stations'],
        serviceArea: 'Ranchi City + Suburbs',
        availability: '7 AM - 9 PM Daily',
        bookingPolicy: 'Advance booking not required',
        amenities: ['City Tour Guide', 'Local Insights', 'Market Access', 'Photo Stops'],
        additionalServices: ['Market Tours', 'Street Food Tours', 'Local Shopping', 'Cultural Experiences'],
        insuranceCoverage: 'Basic passenger insurance',
        fuelPolicy: 'All charges included in hourly rate',
        extraCharges: 'Outside city limits: ₹50 extra, Heavy luggage: ₹20'
      },

      // SPECIALTY TRANSPORT
      {
        id: 'transport11',
        name: 'Vintage Car Collection',
        category: 'Transport',
        subcategory: 'Specialty & Vintage',
        vehicleType: 'Vintage Classic Car',
        location: 'Hazaribagh',
        image: '/api/placeholder/400/300',
        rating: 4.9,
        reviewCount: 89,
        price: 8500,
        priceUnit: 'per day',
        vehicles: ['Ambassador Classic', 'Fiat Premier', 'Contessa Classic', 'Jeep CJ3B'],
        capacity: '4-5 passengers',
        fuelType: 'Petrol',
        features: ['Vintage Charm', 'Classic Design', 'Photography Props', 'Heritage Experience'],
        description: 'Exclusive vintage car collection for special occasions, weddings, and heritage photography.',
        contact: '+91 9876543260',
        email: 'vintage.cars@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: true,
        driverDetails: 'Vintage car specialists and classic car enthusiasts',
        pickupLocations: ['Heritage Hotels', 'Wedding Venues', 'Photography Studios', 'Museums'],
        serviceArea: 'Heritage locations across Jharkhand',
        availability: 'By appointment only',
        bookingPolicy: 'Advance booking 1 week required',
        amenities: ['Period Costumes Available', 'Photography Support', 'Heritage Music', 'Classic Accessories'],
        additionalServices: ['Wedding Photography', 'Heritage Tours', 'Film Shoots', 'Special Events'],
        insuranceCoverage: 'Vintage car insurance',
        fuelPolicy: 'Premium fuel included',
        extraCharges: 'Photography session: ₹2000, Decoration: ₹1500'
      },
      {
        id: 'transport12',
        name: 'Helicopter Charter Services',
        category: 'Transport',
        subcategory: 'Specialty & Vintage',
        vehicleType: 'Helicopter',
        location: 'Ranchi Airport',
        image: '/api/placeholder/400/300',
        rating: 4.8,
        reviewCount: 45,
        price: 25000,
        priceUnit: 'per hour',
        vehicles: ['Bell 407', 'Eurocopter AS350', 'Robinson R44'],
        capacity: '4-6 passengers',
        fuelType: 'Aviation Fuel',
        features: ['Aerial Views', 'Quick Transportation', 'VIP Service', 'Emergency Medical'],
        description: 'Premium helicopter charter for aerial tourism, emergency services, and VIP transportation.',
        contact: '+91 9876543261',
        email: 'helicopter.charter@jharkhand.com',
        driverIncluded: true,
        fuelIncluded: true,
        driverDetails: 'Licensed commercial pilots with local area expertise',
        pickupLocations: ['Airports', 'Helipads', 'Approved Landing Sites', 'Emergency Locations'],
        serviceArea: 'Jharkhand + Neighboring States (Subject to clearances)',
        availability: 'Daylight hours (Weather dependent)',
        bookingPolicy: 'Aviation clearances required 48 hours advance',
        amenities: ['Aerial Photography', 'VIP Interiors', 'Safety Equipment', 'Communication Systems'],
        additionalServices: ['Aerial Photography', 'Medical Emergency', 'VIP Transfers', 'Survey Operations'],
        insuranceCoverage: 'Aviation insurance included',
        fuelPolicy: 'All aviation fuel included',
        extraCharges: 'Landing fees extra, Weather delay charges applicable'
      }
    ]
  };

  // Flatten all services for filtering
  const allServices = [...servicesData.guides, ...servicesData.homestays, ...servicesData.transport];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        service.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        service.specialties?.some(specialty =>
                            specialty.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    const matchesPrice = priceRange === 'All' ||
                        (priceRange === 'Budget' && service.price <= 1500) ||
                        (priceRange === 'Mid-range' && service.price > 1500 && service.price <= 3000) ||
                        (priceRange === 'Premium' && service.price > 3000);
    
    const matchesRating = ratingFilter === 'All' ||
                          (ratingFilter === '4.5+' && service.rating >= 4.5) ||
                          (ratingFilter === '4.0+' && service.rating >= 4.0) ||
                          (ratingFilter === '3.5+' && service.rating >= 3.5);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const handleBookNow = (service) => {
    setSelectedService(service);
  };

  const handleFinalBooking = async () => {
    setIsBooking(true);
    
    // Simulate availability check
    const isAvailable = Math.random() > 0.3; // 70% chance of availability
    
    setTimeout(() => {
      setBookingResult({
        success: isAvailable,
        message: isAvailable
          ? `Booking successful for ${selectedService.name}! (Future: This will update booking database)`
          : "Sorry, this service is not available right now. Please try another date or service."
      });
      setIsBooking(false);
    }, 2000);
  };

  const handleBackToDashboard = () => {
    navigate('/touristDashboard'); // Use navigate for smooth routing
  };

  const closeModal = () => {
    setSelectedService(null);
    setBookingResult(null);
  };

  const getServiceIcon = (category) => {
    switch(category) {
      case 'Guides': return UserCheck;
      case 'Homestays': return Home;
      case 'Transport': return Car;
      default: return Mountain;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToDashboard}
              className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium italic">Back to Dashboard</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-green-800 italic">Services Marketplace</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search guides, homestays, or transport..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 italic"
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border-2 border-green-200 rounded-xl focus:border-green-500 cursor-pointer italic"
              >
                <option value="All">All Categories</option>
                <option value="Guides">Guides</option>
                <option value="Homestays">Homestays</option>
                <option value="Transport">Transport</option>
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border-2 border-green-200 rounded-xl focus:border-green-500 cursor-pointer italic"
              >
                <option value="All">All Prices</option>
                <option value="Budget">Budget (≤₹1500)</option>
                <option value="Mid-range">Mid-range (₹1500-₹3000)</option>
                <option value="Premium">Premium (₹3000+)</option>
              </select>
              
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="px-4 py-2 border-2 border-green-200 rounded-xl focus:border-green-500 cursor-pointer italic"
              >
                <option value="All">All Ratings</option>
                <option value="4.5+">4.5+ Stars</option>
                <option value="4.0+">4.0+ Stars</option>
                <option value="3.5+">3.5+ Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = getServiceIcon(service.category);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold italic">
                    {service.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-green-800 px-2 py-1 rounded-full text-sm font-bold">
                    ₹{service.price}/{service.priceUnit}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <IconComponent className="w-6 h-6 text-green-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 italic mb-1 line-clamp-2">
                        {service.name}
                      </h3>
                      <p className="text-green-600 text-sm italic flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {service.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 italic">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.specialties?.slice(0, 2).map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs italic"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleBookNow(service)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold italic hover:from-green-700 hover:to-emerald-700 hover:shadow-lg transition-all duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 italic mb-2">No services found</h3>
            <p className="text-gray-500 italic">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </main>

      {/* Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold italic">Service Details</h3>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {bookingResult ? (
                // Booking Result
                <div className="text-center py-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    bookingResult.success ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {bookingResult.success ? (
                      <Check className="w-8 h-8 text-green-600" />
                    ) : (
                      <AlertCircle className="w-8 h-8 text-red-600" />
                    )}
                  </div>
                  <h4 className={`text-xl font-bold mb-4 italic ${
                    bookingResult.success ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {bookingResult.success ? 'Booking Confirmed!' : 'Booking Unavailable'}
                  </h4>
                  <p className="text-gray-600 italic mb-6">{bookingResult.message}</p>
                  <button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold italic hover:from-green-700 hover:to-emerald-700 transition-all duration-300 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                // Service Details
                <div>
                  {/* Service Image and Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <img
                        src={selectedService.image}
                        alt={selectedService.name}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {React.createElement(getServiceIcon(selectedService.category), {
                          className: "w-8 h-8 text-green-600"
                        })}
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold italic">
                          {selectedService.category}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 italic mb-2">
                        {selectedService.name}
                      </h4>
                      <p className="text-green-600 italic flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4" />
                        {selectedService.location}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(selectedService.rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-lg font-semibold text-gray-700">
                          {selectedService.rating} ({selectedService.reviewCount} reviews)
                        </span>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl">
                        <p className="text-2xl font-bold text-green-800 italic">
                          ₹{selectedService.price}
                          <span className="text-base font-normal text-green-600 ml-1">
                            {selectedService.priceUnit}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h5 className="font-bold text-gray-800 mb-2 italic">Description</h5>
                        <p className="text-gray-600 italic leading-relaxed">
                          {selectedService.description}
                        </p>
                      </div>

                      {selectedService.specialties && (
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <h5 className="font-bold text-gray-800 mb-2 italic">Specialties</h5>
                          <div className="flex flex-wrap gap-2">
                            {selectedService.specialties.map((specialty, index) => (
                              <span
                                key={index}
                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm italic"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedService.languages && (
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <h5 className="font-bold text-gray-800 mb-2 italic">Languages</h5>
                          <p className="text-gray-600 italic">
                            {selectedService.languages.join(', ')}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h5 className="font-bold text-gray-800 mb-3 italic">Contact Information</h5>
                        <div className="space-y-2">
                          <p className="text-gray-600 flex items-center gap-2 italic">
                            <Phone className="w-4 h-4" />
                            {selectedService.contact}
                          </p>
                          <p className="text-gray-600 flex items-center gap-2 italic">
                            <Mail className="w-4 h-4" />
                            {selectedService.email}
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h5 className="font-bold text-gray-800 mb-2 italic">Capacity & Availability</h5>
                        <div className="space-y-2 text-sm">
                          <p className="text-gray-600 flex items-center gap-2 italic">
                            <Users className="w-4 h-4" />
                            {selectedService.capacity}
                          </p>
                          <p className="text-gray-600 flex items-center gap-2 italic">
                            <Clock className="w-4 h-4" />
                            {selectedService.availability}
                          </p>
                          {selectedService.experience && (
                            <p className="text-gray-600 flex items-center gap-2 italic">
                              <Shield className="w-4 h-4" />
                              {selectedService.experience} experience
                            </p>
                          )}
                        </div>
                      </div>

                      {selectedService.amenities && (
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <h5 className="font-bold text-gray-800 mb-2 italic">Amenities</h5>
                          <div className="grid grid-cols-2 gap-1 text-sm">
                            {selectedService.amenities.slice(0, 6).map((amenity, index) => (
                              <div key={index} className="flex items-center gap-2 text-gray-600">
                                <Check className="w-3 h-3 text-green-500" />
                                <span className="italic">{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Info for Homestays */}
                  {selectedService.category === 'Homestays' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {selectedService.meals && (
                        <div className="bg-green-50 p-4 rounded-xl">
                          <h6 className="font-bold text-green-800 mb-2 italic flex items-center gap-2">
                            <Utensils className="w-4 h-4" />
                            Meals
                          </h6>
                          <p className="text-sm text-green-700 italic">{selectedService.meals}</p>
                        </div>
                      )}
                      {selectedService.checkIn && (
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <h6 className="font-bold text-blue-800 mb-2 italic">Check-in/out</h6>
                          <p className="text-sm text-blue-700 italic">
                            In: {selectedService.checkIn}<br />
                            Out: {selectedService.checkOut}
                          </p>
                        </div>
                      )}
                      {selectedService.hostFamily && (
                        <div className="bg-purple-50 p-4 rounded-xl">
                          <h6 className="font-bold text-purple-800 mb-2 italic">Host Family</h6>
                          <p className="text-sm text-purple-700 italic">{selectedService.hostFamily}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Additional Info for Transport */}
                  {selectedService.category === 'Transport' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <h6 className="font-bold text-blue-800 mb-2 italic">Vehicle Details</h6>
                        <div className="space-y-1 text-sm text-blue-700">
                          <p className="italic">Type: {selectedService.vehicleType}</p>
                          <p className="italic">Fuel: {selectedService.fuelType}</p>
                          <p className="italic">Driver: {selectedService.driverIncluded ? 'Included' : 'Not Included'}</p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl">
                        <h6 className="font-bold text-green-800 mb-2 italic">Service Area</h6>
                        <p className="text-sm text-green-700 italic">{selectedService.serviceArea}</p>
                        <p className="text-sm text-green-600 mt-1 italic">{selectedService.bookingPolicy}</p>
                      </div>
                    </div>
                  )}

                  {/* Final Book Now Button */}
                  <div className="border-t pt-6">
                    <button
                      onClick={handleFinalBooking}
                      disabled={isBooking}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold italic text-lg hover:from-green-700 hover:to-emerald-700 hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isBooking ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Checking Availability...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Confirm Booking - ₹{selectedService.price}
                        </span>
                      )}
                    </button>
                    <p className="text-center text-sm text-gray-500 mt-3 italic">
                      *Future: Integration with payment gateway and booking system
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesMarketplace;