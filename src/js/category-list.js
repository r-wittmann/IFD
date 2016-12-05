const categoryList = [{
  categoryName: 'Living Room',
  id: 'livingRooms',
  subcategories: true,
  subcategoryList: [{
    categoryName: 'Sofas',
    subcategories: true,
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
    subcategories: false
  }, {
    categoryName: 'Side Tables',
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
    subcategories: false
  }, {
    categoryName: 'Bathroom Lighting',
    subcategories: false
  }, {
    categoryName: 'Towels, Bathmats',
    subcategories: false
  }]
}, {
  categoryName: 'Outdoor',
  id: 'outdoors',
  subcategories: false
}]

export default categoryList
