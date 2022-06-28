//- Data
const products = [
  {
    id: `53a0724c-a416-4cac-ae45-bfaedce1f147`,
    fk_category_id: `34115aac-0ff5-4859-8f43-10e8db23602b`,
    name: `Trek Marlin 4 Mountain Bike, Matte Trek Black`,
    description: `Marlin 4 is the perfect gateway to trail riding. It's ideal for new riders who want a mountain bike with knobby tires that can double as a rugged commuter. Disc brakes, front suspension, 21 speeds, and mounts for a rack and fenders make this a great bike for new trail riders and campus commuters alike.`,
    quantity: 20,
    price: 619.99,
    image: `img-1`,
    onSale: true
  },
  {
    id: `c2af9adc-d0b8-4d44-871f-cef66f86f7f6`,
    fk_category_id: `34115aac-0ff5-4859-8f43-10e8db23602b`,
    name: `Trek Procaliber 9.6 Mountain Bike, Blue Carbon Smoke`,
    description: `Procaliber 9.6 is a race-ready cross country hardtail. Its fast carbon frame boasts a trail-taming IsoSpeed decoupler, quick-rolling 29er wheels, and a RockShox Recon Gold RL suspension fork to keep you fast and smooth over roots and rocks during your most demanding mountain bike rides.`,
    quantity: 20,
    price: 2999.99,
    image: `img-2`,
    onSale: false
  },
  {
    id: `47bf3941-9c8b-42c0-9c72-7f3985492a5b`,
    fk_category_id: `d914aec0-25b2-4103-9ed8-225d39018d1d`,
    name: `Trek Madone SLR 9 eTap Road Bike, Amethyst`,
    description: `Madone SLR 9 Disc eTap pairs the aerodynamics and ride quality of an 800 Series OCLV Carbon frame with the smooth, ultra-precise shifting of SRAM's most advanced electronic drivetrain and stiff-yet-compliant high-end Aeolus OCLV Carbon wheels. Saddle up for the fastest rides of your life.`,
    quantity: 10,
    price: 12999.99,
    image: `img-3`,
    onSale: false
  },
  {
    id: `b553085a-a7e0-4c9b-8a12-f971919c3683`,
    fk_category_id: `c01b1ff4-f894-4ef2-b27a-22aacc2fca70`,
    name: `Trek Session 8 29 GX Downhill Mountain Bike, Satin Trek Black`,
    description: `Session 8 is a downhill mountain bike with a robust alloy frame and high-pivot suspension design that keeps you nimble, planted, and blazing fast on even the most punishing runs.`,
    quantity: 2,
    price: 5399.99,
    image: `img-4`,
    onSale: false
  }
]

const categories = [
  {
    id: 'c01b1ff4-f894-4ef2-b27a-22aacc2fca70',
    name: 'Downhill'
  },
  {
    id: '34115aac-0ff5-4859-8f43-10e8db23602b',
    name: 'Mountain'
  },
  {
    id: 'd914aec0-25b2-4103-9ed8-225d39018d1d',
    name: 'Road'
  }
]

const reviews = [
  {
    id: 'b22da5d4-6a4b-4db5-8ec3-acc228c36260',
    date: '2021-01-01',
    title: 'This is bad',
    comment: 'when i bought this it broke the stove',
    rating: 1,
    fk_product_id: 1
  },
  {
    id: '78851fe8-a657-410f-9b0a-2bc952636e16',
    date: '2021-04-23',
    title: 'This is good',
    comment: 'one of the most decent pots',
    rating: 3,
    fk_product_id: '53a0724c-a416-4cac-ae45-bfaedce1f147'
  },
  {
    id: '463c0f40-86bc-4b8e-be47-e363111991d1',
    date: '2020-04-23',
    title: 'is okay',
    comment: 'yes it is decent i guess',
    rating: 2,
    fk_product_id: '53a0724c-a416-4cac-ae45-bfaedce1f147'
  },
  {
    id: 'ebd207cd-f909-4bb1-8416-3e17a161b859',
    date: '2020-07-23',
    title: 'terrible',
    comment: 'why is it so expensive',
    rating: 1,
    fk_product_id: '53a0724c-a416-4cac-ae45-bfaedce1f147'
  },
  {
    id: '92450802-24ef-4907-9c70-b82697a96882',
    date: '2021-01-01',
    title: 'best thing ever',
    comment: 'really good bowl',
    rating: 5,
    fk_product_id: 'c2af9adc-d0b8-4d44-871f-cef66f86f7f6'
  },
  {
    id: 'f7ca2f8e-74ed-4323-9166-c8b606c2238e ',
    date: '2021-04-23',
    title: 'SUPER HAPPY',
    comment: 'this is amazing, only 4 stars tho... :)',
    rating: 4,
    fk_product_id: 'c2af9adc-d0b8-4d44-871f-cef66f86f7f6'
  },
  {
    id: '908dbc7f-7782-43ae-9775-63bbd87db575',
    date: '2020-04-23',
    title: 'life changing',
    comment: 'writing mock data is so boring...',
    rating: 5,
    fk_product_id: 'c2af9adc-d0b8-4d44-871f-cef66f86f7f6'
  },
  {
    id: '1852460f-b186-4a7a-a024-dccc0f72e052',
    date: '2020-07-23',
    title: 'This is coooooool!',
    comment: 'I would totally recommend',
    rating: 5,
    fk_product_id: 'c2af9adc-d0b8-4d44-871f-cef66f86f7f6'
  },
  {
    id: 'd075bdc8-df4b-4389-82ba-cb63726639ec',
    date: '2020-07-23',
    title: 'idc',
    comment: "It's a spoon...",
    rating: 3,
    fk_product_id: '2c931e7e-510f-49e5-aed6-d6b44087e5a1'
  },
  {
    id: '1b2b32ba-acbd-4578-9455-30eb4c8f5c40',
    date: '2020-07-23',
    title: 'terrible!!!!!!',
    comment: 'Not good at all!! used it once and got caught 2 days later. now im doing life without parole',
    rating: 1,
    fk_product_id: '404daf2a-9b97-4b99-b9af-614d07f818d7'
  },
  {
    id: '4480710a-e2b6-4dab-a227-43cb3ffca7b8',
    date: '2020-07-23',
    title: 'great',
    comment: 'Great for planting',
    rating: 5,
    fk_product_id: '404daf2a-9b97-4b99-b9af-614d07f818d7'
  },
  {
    id: '57825f8c-6c13-4ddb-a90e-0c2be283972c',
    date: '2020-07-23',
    title: 'Made well',
    comment: 'Strong an firm',
    rating: 5,
    fk_product_id: '404daf2a-9b97-4b99-b9af-614d07f818d7'
  },
  {
    id: '5b83af5b-e9fa-47e5-8ac8-faa7d420f2d5',
    date: '2020-07-23',
    title: 'Plants grew well',
    comment: 'Oxygen and nitrogen rich!',
    rating: 3,
    fk_product_id: '6379c436-9fad-4b3f-a427-2d7241f5c1b1'
  },
  {
    id: '29120a7e-5c75-4b83-9a21-aa064e2abf37',
    date: '2020-07-23',
    title: 'I made the Nba',
    comment: 'My name is LeBron James',
    rating: 5,
    fk_product_id: 'f01bcdec-6783-464e-8f9e-8416830f7569'
  },
  {
    id: '48e297a2-4b6c-48a2-ab68-6fe6b40cb660',
    date: '2020-07-23',
    title: 'I did not make the NBA',
    comment: 'My name is Laith Harb',
    rating: 5,
    fk_product_id: 'f01bcdec-6783-464e-8f9e-8416830f7569'
  },
  {
    id: '74bc2895-1ee7-4b97-8f4d-d5818fc95b09',
    date: '2020-07-23',
    title: 'I love ball',
    comment: 'I play basketball with this basketball',
    rating: 5,
    fk_product_id: 'f01bcdec-6783-464e-8f9e-8416830f7569'
  },
  {
    id: 'e44b08ac-7b03-488e-83d6-0a85f0f0cecc',
    date: '2020-07-23',
    title: 'Gooooolf',
    comment: 'I need golfing tips',
    rating: 5,
    fk_product_id: 'a4824a31-5c83-42af-8c1b-6e2461aae1ef'
  },
  {
    id: '6ee01595-c3b8-42a9-b0e0-ce3cb2beb7d6',
    date: '2020-07-23',
    title: 'meh',
    comment: "I don't like it",
    rating: 3,
    fk_product_id: 'a4824a31-5c83-42af-8c1b-6e2461aae1ef'
  },
  {
    id: '4dfdbb84-67f1-48cc-8682-1456413225ad',
    date: '2020-07-23',
    title: 'baseball...?',
    comment: 'I thought this was for football',
    rating: 5,
    fk_product_id: 'b553085a-a7e0-4c9b-8a12-f971919c3683'
  },
  {
    id: '574f1c51-2483-44a7-8476-888905e1a711',
    date: '2020-07-23',
    title: 'soccer or football',
    comment: "IT'S CALLED FOOTBALL",
    rating: 2,
    fk_product_id: '47bf3941-9c8b-42c0-9c72-7f3985492a5b'
  },
  {
    id: '1e489691-6d19-4438-a6c5-90919eef070e',
    date: '2020-07-23',
    title: 'too small',
    comment: 'ball is too same',
    rating: 4,
    fk_product_id: '47bf3941-9c8b-42c0-9c72-7f3985492a5b'
  },
  {
    id: '6c8bc709-f675-472e-ae84-f8c7d73e99af',
    date: '2020-07-23',
    title: 'got flat',
    comment: 'The ball got as flat as the earth. I want it round!!!!',
    rating: 2,
    fk_product_id: '47bf3941-9c8b-42c0-9c72-7f3985492a5b'
  }
]

module.exports = {
  products,
  categories,
  reviews
}
