const categoryList = [{
  categoryName: 'Living Room',
  id: 'livingRooms',
  subcategories: true,
  subcategoryList: [{
    categoryName: 'Sofas',
    id: 'sofas',
    subcategories: false,
    subcategoryList: [{
      categoryName: 'Sofa Beds',
      subcategories: false
    }, {
      categoryName: 'Armchairs',
      subcategories: false
    }, {
      categoryName: 'Corner Sofas',
      subcategories: false
    }, {
      categoryName: 'Fabric Sofas',
      subcategories: false
    }]
  }, {
    categoryName: 'Bookcases',
    id: 'bookcases',
    subcategories: false
  }, {
    categoryName: 'Side Tables',
    id: 'sideTables',
    subcategories: false
  }]
}, {
  categoryName: 'Bedroom',
  id: 'bedrooms',
  subcategories: true,
  subcategoryList: [{
    categoryName: 'Wardrobe',
    id: 'wardrobes',
    subcategories: false
  }, {
    categoryName: 'Bed',
    id: 'beds',
    subcategories: false
  }, {
    categoryName: 'Night Tables',
    id: 'nightTables',
    subcategories: false
  }]
}, {
  categoryName: 'Bathroom',
  id: 'bathrooms',
  subcategories: true,
  subcategoryList: [{
    categoryName: 'Bathroom Sinks',
    id: 'bathroomSinks',
    subcategories: false
  }, {
    categoryName: 'Bathroom Lighting',
    id: 'bathroomLighting',
    subcategories: false
  }, {
    categoryName: 'Towels',
    id: 'towels',
    subcategories: false
  }, {
    categoryName: 'Bathmats',
    id: 'bathmats',
    subcategories: false
  }]
}, {
  categoryName: 'Outdoor',
  id: 'outdoors',
  subcategories: false
}]

export default categoryList
