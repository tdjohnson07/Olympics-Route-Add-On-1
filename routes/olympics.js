var router = require('express').Router();
var _ = require('underscore');

var lifters = [{name:'Jenny Arthur', origin: 'Gainsvilli, GA.'}, {name: 'Kendrick Farris', origin: 'Shreveport, LA'},
                {name: 'Morghan King', origin: 'Redmond, Wash.'}, {name: 'Sarah Robles', origin: 'Desert Hot Springs, Calif.'}];

var triathletes = [{name: 'Greg Billington', origin: 'Spokane, Wash.'}, {name: 'Gwen Jorgensen', origin: 'St. Paul, Minn.'}, {name: 'Ben Kanute', origin: 'Geneva, Ill.'},
                {name: 'Joe Maloy', origin: 'Wildwood Crest, N.J.'}, {name: 'Sarah True', origin: 'Hanover, N.H.'}, {name: 'Katie Zaferes', origin: 'Hampstead, Md.'}];

var archers = [{name: 'Mackenzie Brown', origin: 'Flint, Texas'}, {name: 'Brady Ellison', origin: 'Globe, Ariz.'},
              {name: 'Zach Garrett', origin: 'Wellington, Mo'}, {name: 'Jake Kaminski', origin: 'Gainsville. Fla.'}];

var boxers = [{name: 'Carlos Balderas', origin: 'Santa Maria, Calif.'}, {name: 'Charles Conwell', origin: 'Cleveland Heights, Ohio'}, {name: 'Nico Hernandez', origin: 'Wichita, Kan.'},
            {name: 'Mikaela Mayer', origin: 'Los Angeles, Calif.'}, {name: 'Gary Russell', origin: 'Washington, D.C.'}, {name: 'Claressa Shields', origin: 'Flint, Mich.'},
            {name: 'Shakur Stevenson', origin: 'Newark, N.J.'}];

var fencers = [{name: 'Miles Chamley-Watson', origin: 'New York, N.Y.'}, {name: 'Eli Dershwitz', origin: 'Sherborn, Mass.'}, {name: 'Katharine Holmes', origin: 'Washington, D.C.'},
              {name: 'Daryl Homer', origin: 'Bronx, N.Y.'}, {name: 'Courtney Hurley', origin: 'Houston, Texas'}, {name: 'Kelley Hurley', origin: 'San Antonio, Texas'},
              {name: 'Lee Kiefer', origin: 'Lexington, Ky.'}, {name: 'Alex Massialas', origin: 'San Francisco, Calif.'}, {name: 'Gerek Meinhardt', origin: 'San Francisco, Calif.'},
              {name: 'Ibtahaj Muhammad', origin: 'Maplewood, N.J.'}, {name: 'Nzingha Prescod', origin: 'Brooklyn, N.Y.'}, {name: 'Jason Pryor', origin: 'South Euclid, Ohio'},
              {name: 'Dagmara Wozniak', origin: 'Avenel, N.J.'}, {name: 'Mariel Zagunis', origin: 'Beaverton, Ore.'}];

router.get('/weightlifting', function(request, response){
  response.send(_.sample(lifters));
})
router.get('/triathlon', function(request, response){
  response.send(_.sample(triathletes));
})
router.get('/archery', function(request, response){
  response.send(_.sample(archers));
})
router.get('/boxing', function(request, response){
  response.send(_.sample(boxers));
})
router.get('/fencing', function(request, response){
  response.send(_.sample(fencers));
})

module.exports = router;
