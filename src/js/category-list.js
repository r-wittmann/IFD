const categoryList = [{
  categoryName: 'Dining Room',
  subcategories: true,
  subcategoryList: [{
    categoryName: 'Dining Tables',
    subsubcategories: false
  }, {
    categoryName: 'Table Ware',
    subcategories: true,
    subcategoryList: [{
      categoryName: 'Cutlery',
      subcategories: false
    }, {
      categoryName: 'Table Linen',
      subcategories: false
    }, {
      categoryName: 'Jugs, Carafes',
      subcategories: false
    }, {
      categoryName: 'Serveware',
      subcategories: false
    }]
  }, {
    categoryName: 'Decoration',
    subcategories: true,
    subcategoryList: [{
      categoryName: 'Wall Stickers',
      subcategories: false
    }, {
      categoryName: 'Vases, Bowles',
      subcategories: false
    }, {
      categoryName: 'Clocks',
      subcategories: false
    }]
  }]
}, {
  categoryName: 'Living Room',
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
  categoryName: 'Bathroom',
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
  subcategories: false
}]

export default categoryList
