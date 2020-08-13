// Generated by CoffeeScript 1.6.2
(function() {
  var Bop, CelestialBody, Dres, Duna, Eeloo, Eve, G, Gilly, HALF_PI, Ike, Jool, Kerbin, Kerbol, Laythe, Minmus, Moho, Mun, Pol, TWO_PI, Tylo, Vall;

  G = 6.674e-11;

  TWO_PI = 2 * Math.PI;

  HALF_PI = 0.5 * Math.PI;

  (typeof exports !== "undefined" && exports !== null ? exports : this).CelestialBody = CelestialBody = (function() {
    function CelestialBody(mass, radius, siderealRotation, orbit, atmPressure, atmScaleHeight) {
      this.mass = mass;
      this.radius = radius;
      this.siderealRotation = siderealRotation;
      this.orbit = orbit;
      this.atmPressure = atmPressure != null ? atmPressure : 0;
      this.atmScaleHeight = atmScaleHeight != null ? atmScaleHeight : 0;
      this.gravitationalParameter = G * this.mass;
      if (this.orbit != null) {
        this.sphereOfInfluence = this.orbit.semiMajorAxis * Math.pow(this.mass / this.orbit.referenceBody.mass, 0.4);
      }
      this.atmRadius = -Math.log(1e-6) * this.atmScaleHeight + this.radius;
    }

    CelestialBody.prototype.circularOrbitVelocity = function(altitude) {
      return Math.sqrt(this.gravitationalParameter / (altitude + this.radius));
    };

    CelestialBody.prototype.siderealTimeAt = function(longitude, time) {
      var result;

      result = ((time / this.siderealRotation) * TWO_PI + HALF_PI + longitude) % TWO_PI;
      if (result < 0) {
        return result + TWO_PI;
      } else {
        return result;
      }
    };

    CelestialBody.prototype.name = function() {
      var k, v;

      for (k in CelestialBody) {
        v = CelestialBody[k];
        if (v === this) {
          return k;
        }
      }
    };

    CelestialBody.prototype.children = function() {
      var k, result, v, _ref;

      result = {};
      for (k in CelestialBody) {
        v = CelestialBody[k];
        if ((v != null ? (_ref = v.orbit) != null ? _ref.referenceBody : void 0 : void 0) === this) {
          result[k] = v;
        }
      }
      return result;
    };

    return CelestialBody;

  })();

  CelestialBody.fromJSON = function(json) {
    var orbit;

    if (json.orbit != null) {
      orbit = Orbit.fromJSON(json.orbit);
    }
    return new CelestialBody(json.mass, json.radius, json.siderealRotation, orbit, json.atmPressure);
  };

CelestialBody.Sun = Sun = new CelestialBody(1.7714E+28,87200000,999999999,null);
CelestialBody.c67P = c67P =    new CelestialBody(9.9780E+12,     1800, 45940.9, new Orbit(Sun   ,64752126379,0.641,7.0405,27.71613321,12.78,111.0310279));
CelestialBody.Halley = Halley = new CelestialBody(2.2000E+14,5775,190080,new Orbit(Sun,268166615847,0.9666110477,159.7285829,131.7198903,188.6163603,340));
CelestialBody.Mercury = Mercury = new CelestialBody(2.9489E+21,229770,1266757.92,new Orbit(Sun,5453849467,0.2056187266,7.01,10.86541168,66.90371044,318.2162078));
CelestialBody.Venus = Venus = new CelestialBody(4.3125E+22,569693,-5249199.254,new Orbit(Sun,10191142286,0.006810339651,3.39458,7.981603379,123.7121294,311.2459948));
CelestialBody.Earth = Earth = new CelestialBody(5.2916E+22,600000,21549.425,new Orbit(Sun,14089118586,0.01609636161,0,359.9965004,102.9720683,357.0607464));
CelestialBody.Moon = Moon = new CelestialBody(6.5307E+20,163600,590146.1712,new Orbit(Earth,36194051.4,0.05328149354,28.36267791,2.296616161,199.764093,222.7012351));
CelestialBody.Ryugu = Ryugu = new CelestialBody(5.5628E+13,435,15470.9,new Orbit(Sun,15956024156,0.2060777107,5.8837,0.4435730855,66.43350813,237.7027942));
CelestialBody.Mars = Mars = new CelestialBody(5.6311E+21,317932,22160.6712,new Orbit(Sun,21468233185,0.09326110278,1.85,3.351911063,332.1022655,169.3913128));
CelestialBody.Phobos = Phobos = new CelestialBody(4.4919E+15,7250,6888.460968,new Orbit(Mars,1766471.614,0.01539938156,1.093,46.48212553,357.7759243,7.185120836));
CelestialBody.Deimos = Deimos = new CelestialBody(1.4800E+15,5456,27280.8,new Orbit(Mars,4418416.955,0.0003294680799,0.93,47.51893571,263.8963869,323.5040336));
CelestialBody.Ceres = Ceres = new CelestialBody(8.4590E+18,44547,8166.6,new Orbit(Sun,38965790385,0.07936349488,10.62,23.45017277,129.1910266,60.16247105));
CelestialBody.Vesta = Vesta = new CelestialBody(2.2494E+18,24741,4807.8,new Orbit(Sun,33278039537,0.09020684123,5.58,18.16712327,236.4453692,61.06070014));
CelestialBody.Jupiter = Jupiter = new CelestialBody(1.4795E+25,6533528,8932.5,new Orbit(Sun,73289596785,0.04872660655,1.31,3.26207729,10.75642751,302.5812396));
CelestialBody.Io = Io= new CelestialBody(7.8276E+20,170588,6888188.012,new Orbit(Jupiter,39745554.2,0.003545858426,0.05,358.0466432,231.2703461,195.327409));
CelestialBody.Europa = Europa = new CelestialBody(4.2016E+20,146054,18860161.47,new Orbit(Jupiter,63218462.76,0.00951172712,0.47,358.9360082,53.13210738,276.2652038));
CelestialBody.Ganymede = Ganymede = new CelestialBody(1.3107E+21,247137,21515132.07,new Orbit(Jupiter,100849827.5,0.001190086418,0.2,358.0125219,139.2992571,232.6753229));
CelestialBody.Callisto = Callisto = new CelestialBody(9.5356E+20,2269074,58857839.19,new Orbit(Jupiter,177416873.9,0.007973319797,0.192,358.5022563,320.7359683,15.81614025));
CelestialBody.Saturn = Saturn = new CelestialBody(4.5455E+24,5388585,9513,new Orbit(Sun,134190879508,0.05347166507,2.485,5.970845344,85.04661203,67.46885226));
CelestialBody.Mimas = Mimas = new CelestialBody(3.3290E+17,18666,20347.2,new Orbit(Saturn,17518297.79,0.01776275223,1.574,139.7604722,222.2172789,125.5909782));
CelestialBody.Enceladus = Enceladus = new CelestialBody(9.3631E+17,23743,29596.7088,new Orbit(Saturn,22453729.47,0.006227898,0.009,128.4244162,115.5615886,346.6301477));
CelestialBody.Tethys = Tethys = new CelestialBody(5.5160E+18,50018,40776.5232,new Orbit(Saturn,27780510.68,0.001064868868,1.12,119.2518388,215.9196893,349.8231217));
CelestialBody.Dione = Dione = new CelestialBody(9.6974E+18,52872,59117.364,new Orbit(Saturn,35567023.12,0.001679230906,0.019,128.5606071,123.6717156,167.9272785));
CelestialBody.Rhea = Rhea = new CelestialBody(2.0460E+19,71934,97593.3792,new Orbit(Saturn,49652726.1,0.001168269516,0.345,130.3670575,172.736709,13.48887719));
CelestialBody.Titan = Titan = new CelestialBody(1.2087E+21,242352,344412,new Orbit(Saturn,115084407.5,0.02891936562,0.34854,126.4945234,182.0886765,75.16117359));
CelestialBody.Iapetus = Iapetus = new CelestialBody(1.6037E+19,69174.99,1713344.4,new Orbit(Saturn,335295026.7,0.02880286282,15.47,50.2939288,314.3819081,139.5683325));
CelestialBody.Uranus = Uranus = new CelestialBody(7.1917E+23,2326427,15515.928,new Orbit(Sun,269997443319,0.04620653159,0.773,1.846089669,169.6876791,286.826736));
CelestialBody.Titania = Titania = new CelestialBody(3.1320E+19,74298,36197226.68,new Orbit(Uranus,41089911.75,0.002486916,0.34,166.6555215,165.7455424,212.6552822));
CelestialBody.Neptune = Neptune = new CelestialBody(8.6218E+23,2268318,14500.08,new Orbit(Sun,423569017971,0.008090397688,1.77,3.512610712,29.81485403,162.0995482));
CelestialBody.Triton = Triton = new CelestialBody(1.8961E+20,127463,126943.25,new Orbit(Neptune,33411870.74,0.000168801436,156.885,197.195324,220.4523287,358.6561878));
CelestialBody.Pluto = Pluto = new CelestialBody(1.1573E+20,111791,137964.168,new Orbit(Sun,550543475615,0.2462772488,17.14,44.36099837,184.4945352,300.1297305));
CelestialBody.Charon = Charon = new CelestialBody(1.3771E+19,56837,137964.1766,new Orbit(Pluto,1845563.556,0.00005082225659,0.08,222.4053736,188.4738647,30.8998924));


}).call(this);
