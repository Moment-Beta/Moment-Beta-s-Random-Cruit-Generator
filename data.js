data = {
	"CTU": [
		{
			"name": "SAS",
			"Attack": {
				"Primary": [{
						"name": "L85A2",
						"img": "L85A2"
					},
					{
						"name": "M590A1",
						"img": "M590A1"
					},
					{
						"name": "AR33",
						"img": "AR33"
					}
		  ],
				"Secondary": [{
					"name": "P226",
					"img": "P226"
				}, {
					"name": "SMG-11",
					"img": "SMG11"
				}]

			},
			"Defend": {
				"Primary": [{
						"name": "MP5K",
						"img": "MP5K"
					},
					{
						"name": "M590A1",
						"img": "M590A1"
					},
					{
						"name": "FMG-9",
						"img": "FMG9"
					}
		  ],
				"Secondary": [{
					"name": "P226",
					"img": "P226"
				}, {
					"name": "SMG-11",
					"img": "SMG11"
				}]
			}
},
		{
			"name": "FBI SWAT",
			"Attack": {
				"Primary": [{
						"name": "M1014",
						"img": "M1014"
					},
					{
						"name": "R4-C",
						"img": "R4C"
					},
					{
						"name": "556xi",
						"img": "556XI"
					},
					{
						"name": "Ballistic Shield",
						"img": "shield"
					}
		  ],
				"Secondary": [{
					"name": "MEUSOC",
					"img": "M45"
				}, {
					"name": "5.7 USG",
					"img": "57USG"
				}]

			},
			"Defend": {
				"Primary": [{
						"name": "UMP45",
						"img": "UMP"
					},
					{
						"name": "M1014",
						"img": "M1014"
					}
					
		  ],
				"Secondary": [{
					"name": "MEUSOC",
					"img": "M45"
				}, {
					"name": "5.7 USG",
					"img": "57USG"
				}]
			}
},
		{
			"name": "GIGN",
			"Attack": {
				"Primary": [{
						"name": "F2",
						"img": "F2"
					},
					{
						"name": "417",
						"img": "417"
					},
					{
						"name": "Ballistic Shield",
						"img": "shield"
					},
					{
						"name": "SG-CQB",
						"img": "SGCQB"
					}
		  ],
				"Secondary": [{
					"name": "LFP586",
					"img": "LFP586"
				}, {
					"name": "P9",
					"img": "P9"
				}]

			},
			"Defend": {
				"Primary": [{
						"name": "P90",
						"img": "P90"
					},
					{
						"name": "F2",
						"img": "F2"
					},
					{
						"name": "SG-CQB",
						"img": "SGCQB"
					}
		  ],
				"Secondary": [{
					"name": "LFP586",
					"img": "LFP586"
				}, {
					"name": "P9",
					"img": "P9"
				}]
			}
},
		{
			"name": "Spetsnaz",
			"Attack": {
				"Primary": [{
						"name": "SASG-12",
						"img": "SASG"
					},
					{
						"name": "AK-12",
						"img": "AK12"
					},
					{
						"name": "6P41",
						"img": "6P41"
					}
		  ],
				"Secondary": [{
					"name": "PMM",
					"img": "PMM"
				}, {
					"name": "GSh-18",
					"img": "GSH"
				}]

			},
			"Defend": {
				"Primary": [{
						"name": "SASG-12",
						"img": "SASG"
					},
					{
						"name": "9x19VSN",
						"img": "VSN"
					}
		  ],
				"Secondary": [{
					"name": "PMM",
					"img": "PMM"
				}, {
					"name": "GSh-18",
					"img": "GSH"
				}]
			}
},
		{
			"name": "GSG 9",
			"Attack": {
				"Primary": [{
						"name": "AUG A2",
						"img": "AUG"
					},
					{
						"name": "M870",
						"img": "M870"
					},
					{
						"name": "552 Commando",
						"img": "552C"
					},
					{
						"name": "G8A1",
						"img": "G8A1"
					}
		  ],
				"Secondary": [{
					"name": "P12",
					"img": "P12"
				}]

			},
			"Defend": {
				"Primary": [{
						"name": "MP7",
						"img": "MP7"
					},
					{
						"name": "M870",
						"img": "M870"
					},
					{
						"name": "416-C",
						"img": "416C"
					}
		  ],
				"Secondary": [{
					"name": "P12",
					"img": "P12"
				}]
			}
}
],
	"Gadgets": {
		"Attack": {
			"first": [{
				"name": "Frag Grenade",
				"img": "frag"
				}, {
				"name": "Stun Grenade",
				"img": "flash"
				}],
			"second": [{
				"name": "Smoke Grenade",
				"img": "smoke"
				}, {
				"name": "Breach Charge",
				"img": "breach"
				}]
		},
		"Defend": {
			"first": {
				"name": "Barbed Wire",
				"img": "wire"
				},
			"second": [{
				"name": "Deployable Shield",
				"img": "shield"
				}, {
				"name": "Nitro Cell",
				"img": "C4"
				}]
		}
	}


}
function makeSrcURL(CTU,Weapon){
	if(CTU!="gadget"){
		return window.location.href+"/Weapons/"+CTU+"/"+Weapon+".PNG"
	}
	else{
		return window.location.href +"/Gadgets/"+Weapon+".PNG"
	}
}
function randomize(attack){
	if(attack){
		CTU = data.CTU[RandInt(5)];
		name=CTU.name;
		primary = CTU.Attack.Primary[RandInt(CTU.Attack.Primary.length)];
		secondary = CTU.Attack.Secondary[RandInt(CTU.Attack.Secondary.length)];
		gadget1 = data.Gadgets.Attack.first[RandInt(2)];
		gadget2 = data.Gadgets.Attack.second[RandInt(2)];
	}
	else{
		CTU = data.CTU[RandInt(5)]
		name=CTU.name;
		primary = CTU.Defend.Primary[RandInt(CTU.Defend.Primary.length)];
		secondary = CTU.Defend.Secondary[RandInt(CTU.Defend.Secondary.length)];
		gadget1 = data.Gadgets.Defend.first;
		gadget2 = data.Gadgets.Defend.second[RandInt(2)];
	}
	document.getElementById("primaryName").innerHTML = primary.name;
	document.getElementById("primaryImg").src = makeSrcURL(CTU.name,primary.img)
	document.getElementById("secondaryName").innerHTML = secondary.name;
	document.getElementById("secondaryImg").src = makeSrcURL(CTU.name,secondary.img)
	document.getElementById("gadget1Name").innerHTML = gadget1.name;
	document.getElementById("gadget1Img").src = makeSrcURL("gadget",gadget1.img)
	document.getElementById("gadget2Name").innerHTML = gadget2.name;
	document.getElementById("gadget2Img").src = makeSrcURL("gadget",gadget2.img)
	document.getElementById("badge").src = CTU.name+".png"
}
function RandInt(max){
	return Math.floor(Math.random()*(max))
}
