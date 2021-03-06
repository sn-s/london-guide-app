import React from "react";
import "./London.css"

let size;
  if (window.matchMedia("(max-width: 500px)").matches) {
    size = "45px"
  } else {
    size = "65px"
  }

const SVG = ({
  style = {width: size},
  className = "",
  viewBox="390 350 320 320"
}) => {
  return (
    <svg
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <path
      fill={"#b5df00"}
      d="m 615.00746,422.7816 -0.87593,2.48043 1.08912,0.31444 1.2732,0.43063 1.8999,0.93972 2.19135,0.80442 2.17983,0.96684 2.52715,1.34568 3.70563,1.85092 3.58817,1.61623 3.32099,1.0908 5.02751,1.51734 2.61773,0.18278 2.06883,-0.29486 1.18623,-0.29364 1.94565,-0.86761 2.66754,-1.55546 7.00357,-6.09515 1.28807,-1.37824 1.253,-1.32002 1.66008,-1.49327 2.31652,-1.66167 1.63582,-0.77887 1.89815,-0.70849 3.50873,0.19501 2.95208,0.32193 2.2663,0.47521 1.7223,0.65011 2.89635,1.36417 1.52065,0.88613 1.01176,0.88681 0.69788,0.84144 0.39756,0.98397 0.47047,1.6765 0.0316,1.68984 0.33107,1.9156 0.0405,2.177 3.3e-4,1.68984 -0.0362,2.68857 -0.0419,4.19231 -0.0748,4.08908 -0.0993,2.90875 -0.52771,1.82146 -1.38443,1.03699 -1.39185,0.55634 -2.09097,0.52251 -2.57092,0.31038 -2.03794,0.17667 -2.09248,0.0144 -0.82,0.22191 -0.90478,0.43997 -0.63319,1.02346 -0.42444,1.55251 -0.48924,0.7618 -0.87372,0.68921 -1.17271,0.24296 -2.4273,0.36917 -2.489,0.33439 -2.322,0.29203 -1.92023,0.75912 -1.7729,0.74825 -0.9769,0.5656 -0.67339,0.98682 0.28389,1.12712 0.5666,1.10408 -0.68814,0.42103 -1.52923,0.18714 -0.63256,0.94437 -0.3042,1.63864 -0.0189,2.56183 -0.0691,2.99904 -0.0533,1.95999 0.11631,4.83641 0.38997,4.33886 0.3311,5.3457 0.90178,4.63825 0.38037,4.10315 0.18287,3.99201 0.29452,3.2612 0.16834,2.54208 0.1892,1.61473 0.82115,0.79572 0.53376,0.62204 0.25411,1.13676 0.34091,1.37982 0.39773,0.64975 0.51118,0.55603 1.06982,0.44168 1.08069,1.05396 1.00803,0.92499 1.28524,1.33753 1.28187,1.46779 1.0359,2.16397 0.49906,2.73212 0.16837,2.81774 -0.2265,3.019 -0.4117,2.97938 0.52473,2.2458 0.79498,1.36101 1.05826,0.97363 3.66464,2.50485 -1.24405,1.94152 -0.95586,1.56238 -1.4295,2.74244 -1.56816,2.46925 -1.41856,0.94425 -1.63349,0.33251 -2.66484,0.82291 -1.96768,0.98445 -2.17187,0.59231 -1.63617,4.7e-4 -2.02358,-1.12279 -2.60814,-1.05833 -1.60273,0.8108 -2.19627,1.98709 -2.50207,3.10479 -2.04821,3.96613 -1.2348,5.30798 -0.58272,4.59688 0.34846,4.48571 0.54603,3.59546 -0.71685,3.40765 -1.40271,3.1392 -1.69694,2.99886 -2.19649,1.79382 -2.34,1.04818 -2.22224,0.67905 -1.87692,1.67682 -1.51675,2.26032 -0.99839,2.87333 -0.1015,2.57235 0.23183,2.71301 -0.18642,2.80611 -0.59402,2.66188 -0.74535,2.63731 -1.39759,3.55082 -1.33925,3.06798 -1.96918,2.25814 -1.94576,0.61335 -2.56809,0.35107 -2.89269,0.26598 -2.05606,-0.29707 -3.04394,-1.89424 -2.555,-2.05255 -3.3029,-2.51624 -2.084,-0.14213 -3.87333,-0.094 -4.62785,-0.004 -3.89621,-0.0333 -4.5484,0.003 -4.07123,0.0373 -3.14475,-0.15054 -2.28453,0.0136 -1.4358,1.57488 -1.34476,1.17468 -1.36344,1.30486 -1.6149,1.61786 -1.28592,1.47177 -1.33018,1.40018 -1.33327,1.65977 -0.90076,1.11338 -0.85293,1.32503 -0.6891,1.42768 -0.63687,1.30314 -0.85019,1.19445 -0.92985,1.40615 -0.90261,0.98906 -0.90008,0.95771 -0.84381,1.09041 -0.32834,1.15734 -0.23072,0.84564 -0.71238,0.49685 -1.37637,0.78952 -1.62081,0.51966 -1.39777,0.0805 -1.60703,0.15399 -2.16889,-0.52407 -1.28783,-0.46059 -1.33124,-0.20123 -0.59726,0.62674 -0.22627,0.61423 -0.22068,0.94014 -0.24907,0.57779 -0.27335,0.34514 -0.39353,0.20612 -0.46641,0.12491 -0.56333,0.0242 -1.05215,-0.25747 -0.94546,-0.26668 -1.45695,-0.73596 -1.59151,-0.7243 -1.53678,-0.63114 -1.08983,-0.45475 -0.97343,-0.36955 -0.91667,-0.2522 -0.89239,-0.10145 -0.43708,0.12409 -0.38611,0.28777 -0.4082,0.29881 -0.59082,0.17119 -1.22704,0.1805 -1.44183,0.0109 -1.66188,-0.0213 -0.26534,-0.43927 0.38013,-0.44037 0.61039,-0.51437 0.74572,-0.67092 0.78082,-0.9141 0.71746,-0.89197 0.58802,-0.68954 0.76299,-0.83762 0.45437,-0.67112 0.23758,-0.45068 0.13919,-0.61873 0.28622,-0.65317 0.75524,-1.2407 0.94713,-1.38555 0.99562,-1.47586 0.80445,-1.09064 1.135,-1.37011 0.75141,-0.99027 0.5355,-0.82271 0.67245,-0.62258 0.37581,-0.3894 0.0987,-0.50554 -0.0688,-0.77339 -0.0606,-2.08071 -0.1257,-2.346 -0.0514,-1.92963 -0.0819,-2.75042 -0.0361,-1.72003 -0.0153,-1.92062 -0.0297,-2.01499 -0.0297,-1.2321 -0.0886,-1.62712 -0.0898,-0.80945 0.066,-0.83295 0.17651,-0.43633 0.31377,-0.5574 0.679,-0.34567 0.89671,-0.32935 0.83337,-0.0564 0.70721,-0.0733 0.38521,-0.29835 0.12016,-0.37666 -0.10298,-0.72663 -0.0909,-0.64804 -0.20161,-1.26368 -0.3791,-1.48638 -0.27431,-1.72497 -0.007,-0.52882 -0.12263,-0.49811 -0.20441,-0.37944 -0.63887,-0.49405 -0.51457,-0.31735 -0.77193,-0.33826 -0.71603,-0.33233 -0.76807,-0.81813 -0.82982,-1.11638 -0.43158,-1.05276 -0.15481,-1.28932 0.18912,-1.28269 0.3316,-1.1937 0.76101,-0.98811 0.62853,-0.7753 0.48866,-0.82415 0.66123,-1.11085 0.50292,-1.25588 0.32493,-1.61605 0.36585,-1.10347 0.23379,-0.95165 0.24299,-0.6268 0.22114,-0.40087 0.17058,-0.48766 -0.0219,-0.38206 -0.13898,-0.23712 -0.36813,-0.0913 -0.79765,0.0598 -0.76526,0.0833 -0.87466,0.17083 -0.84076,0.18042 -0.6841,0.0444 -1.20311,0.075 -2.08821,-0.0856 -1.33611,-0.2357 -1.12898,-0.5481 -1.07823,-0.87771 -0.67664,-1.1236 -0.60171,-1.10883 -0.83137,-2.04025 -0.49691,-1.86328 0.0597,-2.07197 0.35907,-1.97975 0.52133,-1.63446 0.88233,-1.71132 0.83667,-1.22934 0.55643,-1.1096 0.42159,-0.9382 0.10877,-0.74348 -0.0334,-0.7537 -0.26759,-0.52437 -0.56192,-0.44817 -0.81644,-0.53558 -1.42177,-0.59763 -1.00174,-0.61669 -1.02572,-0.51693 -0.7465,-0.68358 -0.35679,-0.55366 -0.51968,-0.84709 -0.39233,-1.43629 -0.25703,-1.25652 -0.30505,-1.62404 -0.35477,-1.44174 -0.85068,-3.09395 -0.49848,-2.61315 -0.66298,-3.13981 -0.79464,-3.589 -0.61814,-2.42682 -0.36396,-2.04369 -0.39228,-2.69834 -0.17192,-1.75696 0.0572,-1.47491 0.35234,-1.77236 0.75578,-1.73313 1.14059,-1.16868 1.67805,-1.51911 1.85018,-1.49932 2.17188,-1.5093 2.33421,-1.25475 4.83029,-2.68165 3.54561,-2.27667 1.72958,-1.12747 0.86822,-0.36127 0.45341,-0.32815 0.37036,-0.36689 0.26772,-0.37401 0.26949,-0.52125 0.16068,-0.9035 0.0425,-0.76417 0.74358,-2.50223 0.70312,-2.14843 0.99219,-2.5625 0.89062,-2.0625 1.20313,-2.52344 0.96094,-1.71875 0.75,-1.23438 0.48437,-0.65625 0.34375,-0.42968 0.625,-0.59375 0.50781,-0.61719 0.40625,-0.57813 0.42578,-0.69922 0.32422,-0.58203 0.3086,-0.65234 0.28717,-0.69747 0.25412,-0.80102 0.19335,-0.79549 0.0896,-0.56149 0.0312,-0.32813 -0.008,-0.3164 -0.0273,-0.28516 -0.0664,-0.27344 -0.10937,-0.26562 -0.13281,-0.23438 -0.21485,-0.27343 -0.27734,-0.26953 -0.60212,-0.30654 -0.67556,-0.26937 -0.47577,-0.29955 -0.24542,-0.16753 -4.06754,-0.3867 -1.1289,0.71094 -0.77344,0.42187 -0.78125,0.37109 -1.29297,0.53907 -1.22266,0.42968 -1.7526,0.52166 -1.37002,0.31488 -1.11038,0.17125 -1.04409,0.0663 -0.86731,-0.0276 -1.10485,-0.0442 -1.68491,-0.10496 -1.8893,-0.16573 -1.707,-0.18783 -1.39764,-0.18782 -1.48603,-0.2265 -1.16562,-0.20439 -1.3424,-0.27069 -1.14904,-0.27622 -4.05381,0.38359 -0.46875,0.19922 -2.18944,0.76512 -2.74003,0.74025 -3.98853,0.98332 -2.91681,0.67396 -3.38086,0.7734 -3.19303,0.76235 -2.01083,0.51928 -1.74567,0.45299 -1.64623,0.46404 -1.42527,0.43089 -1.23743,0.44194 -1.42527,0.55243 -1.25953,0.59662 -0.83969,0.45299 -0.97227,0.65187 -0.90598,0.685 -0.76235,0.68501 -0.7955,0.78445 -0.7071,0.7292 -1.18772,1.22639 -1.45841,1.25954 -0.78997,0.58005 -0.80654,0.53585 -0.71816,0.41432 -0.79549,0.35355 -0.65739,0.25964 -0.78997,0.2265 -1.08828,0.20992 -1.41422,0.26517 -1.10485,0.19887 -0.59042,0.11333 -10.14426,-12.99136 -5.78125,-6.78125 -3,-3.09375 -2.84375,-2.53125 -2.5,-3.0625 -2.125,-3.46875 -0.44922,-0.77344 -0.57421,-0.8125 -1.13282,-1.51563 -1.33594,-1.65625 -2.16406,-2.48437 -1.86719,-2.04688 -1.66406,-1.6875 -1.80469,-1.84375 -2.60937,-2.96875 -2.10156,-2.64843 -1.92188,-2.625 -1.36719,-2.08594 -1.17187,-1.90625 -1.24219,-2.34375 -0.88281,-2.11719 -0.22656,-1.17969 0.0234,-0.71875 0.17969,-0.36718 0.21094,-0.19532 0.26562,-0.20312 0.42188,-0.46875 0.57031,-0.86719 0.39844,-0.82812 0.125,-0.39063 0.0391,-0.19531 0.0312,-0.25 -0.008,-0.34375 -0.0312,-0.35938 -0.0312,-0.30468 -0.0859,-0.34375 -0.0781,-0.35157 -0.20313,-0.64843 -0.22656,-0.57813 -0.36719,-0.80469 -0.59375,-1.03125 -0.67969,-0.875 -0.47656,-0.48437 -0.50781,-0.375 -0.375,-0.16797 -0.19141,-0.0469 -0.17187,-0.0117 -0.12891,0.008 -0.10937,0.0195 -0.0703,-0.0117 -0.10938,-0.0351 -0.15625,-0.0899 -0.19531,-0.17187 -0.25781,-0.2461 -0.24219,-0.29297 -0.32422,-0.4414 -0.86328,-1.33985 -0.82813,-1.54687 -1.07812,-2.23438 -1.35157,-3.00781 -1.64062,-3.27344 -1.36719,-2.50781 -1.32812,-2.28125 -0.95313,-1.50781 -1.26562,-1.8125 -0.83594,-1.25781 -0.53906,-0.95313 -0.3125,-0.79687 -0.0859,-0.60938 0.0781,-0.51562 0.28125,-0.53907 0.28125,-0.35937 0.3125,-0.41406 0.14844,-0.26563 0.125,-0.34375 0.10156,-0.39062 0.0547,-0.45313 0.008,-0.50781 -0.008,-0.51563 -0.0547,-0.67968 -0.0625,-0.64844 -0.10937,-0.77344 -0.14844,-1.0625 -0.48437,-2.80469 -0.46094,-2.50781 -0.35938,-1.96094 -0.26562,-1.61718 c 0,0 -0.0547,-1.21094 -0.0547,-1.24219 0,-0.0312 0.10938,-0.82031 0.10938,-0.82031 l 0.26562,-0.60938 0.41406,-0.375 0.58594,-0.17969 0.53125,-0.0625 0.64063,0.0312 0.875,0.10157 1.66406,0.375 2.15625,0.59375 1.85156,0.57031 1.78125,0.61719 1.375,0.57031 h 5.03125 l 0.10938,-1.58594 0.26562,-1.51562 0.28125,-0.76563 0.48438,-0.84375 0.51562,-0.67187 1.14063,-0.9375 1.125,-0.59375 1.51562,-0.67188 2.39011,-0.8751 2.69032,-0.85626 1.11038,-0.2486 0.98332,-0.19335 0.74025,-0.11048 0.90598,-0.0608 0.90598,0.0331 0.66291,0.0884 0.54138,0.11601 0.48061,0.14915 0.58558,0.20992 0.60214,0.28727 0.86179,0.47508 1.1601,0.78445 1.14904,0.90046 0.67949,0.60767 0.81759,0.86731 0.37013,0.53033 0.37565,0.61871 0.30383,0.78445 0.17126,0.80102 0.0221,1.05514 0.0442,0.82311 0.11601,0.66292 0.1381,0.5248 0.29279,0.57453 0.3646,0.35355 0.46404,0.11048 0.49718,-0.14363 0.49719,-0.27621 0.68501,-0.62977 0.66291,-0.76235 0.72921,-1.04961 0.87283,-1.45841 1.09381,-2.08817 1.0938,-2.44173 0.47509,-1.33687 0.49718,-1.28163 0.22097,-0.68501 0.14364,-0.68501 0.039,-0.23744 v -0.10937 l -0.008,-0.19141 -0.0273,-0.25 -0.0156,-0.35547 -0.0435,-1.2207 0.0221,-1.40317 0.0552,-0.88388 0.13259,-0.49718 0.5072,-1.01198 0.89422,-0.2923 0.85073,0.22916 0.66253,0.55981 0.98805,0.91116 0.57026,0.40163 0.91817,0.98022 0.67547,-0.75823 0.82766,-0.8427 0.79994,-1.03098 0.71458,-1.14937 0.62598,-1.12284 0.47195,-0.83309 0.7715,-1.00541 0.79627,-0.77405 1.00529,-0.8651 0.89762,-0.67857 0.89368,-0.64493 1.13364,-0.66189 1.05065,-0.5064 1.15256,-0.30986 0.99882,-0.22789 1.22403,-0.13652 1.05988,-0.0694 1.00162,0.0254 0.85147,0.0829 0.69685,0.18002 0.81472,0.51305 0.5874,0.87625 0.36281,0.91996 0.42608,0.48825 0.63527,0.2686 0.7808,0.14087 0.63567,-0.0582 1.5236,0.079 1.06749,-0.0477 1.21734,0.10894 1.09061,0.33953 0.72785,0.22765 0.91671,0.39477 0.9286,0.63745 0.61606,0.55866 0.48525,0.42799 0.57123,0.48636 0.39717,0.37334 0.33722,0.3045 0.35114,0.2602 0.28453,0.11865 0.33992,0.0846 0.23188,0.007 0.27563,-0.0512 0.36851,-0.0835 0.49468,-0.19886 0.56738,-0.30303 0.71997,-0.33661 0.58114,-0.35342 0.59627,-0.32913 0.83107,-0.18892 0.80768,-0.16209 0.66625,-0.14556 0.68006,0.001 0.38892,0.0286 0.48599,0.29079 0.43828,0.21789 0.51181,0.0625 0.79007,-0.0849 0.74328,-0.14148 0.50694,-0.11395 0.73549,-0.26364 0.6116,-0.18805 0.72633,-0.18443 0.61845,-0.12138 0.72037,-0.14744 0.68546,-0.17101 0.56548,-0.0182 0.60267,-0.0554 0.63282,0.119 0.65368,0.47289 0.45001,0.90146 0.65742,1.86989 0.57055,1.76727 0.49807,1.48349 0.51793,1.66025 0.46496,1.33893 0.36703,1.17266 0.40727,1.29216 0.5159,1.77709 0.70914,2.1766 0.3693,1.04771 0.62564,1.80354 0.61836,1.58924 0.66817,1.48062 0.65069,1.52633 0.5434,1.03899 0.73411,1.32917 0.64139,1.0534 0.57781,1.04123 0.46032,0.62628 0.55751,0.52106 0.60958,0.28586 0.56251,0.26942 0.71701,0.088 0.71511,0.27751 0.67146,0.5149 0.62395,0.62513 0.89959,0.92389 0.616,0.60294 0.85486,1.08119 0.90066,1.16081 0.73323,1.04305 0.63391,0.99081 1.05565,1.17138 0.84281,1.04932 1.09283,1.02751 0.64188,0.62152 0.96136,0.49638 0.85438,0.47818 0.96956,0.62472 0.89398,0.62521 0.83529,0.84654 0.58558,0.50603 0.63693,0.61936 0.47229,0.39504 0.47484,0.37178 0.50523,0.17163 0.51015,-0.1289 0.6832,0.0105 0.49375,0.50786 0.33525,0.86523 0.26825,1.44856 0.30324,1.23871 0.47945,1.21909 0.49819,1.00662 0.5254,0.80705 0.79715,0.84954 0.63995,0.59323 0.57692,0.41535 0.42899,0.077 0.52348,-0.26766 0.84035,-0.40575 1.02752,-0.71238 0.79536,-0.51958 0.93864,-0.67946 0.78812,-0.55491 0.67771,-0.36969 0.65931,-0.3434 0.53536,-0.24245 0.64152,-0.2435 0.66275,-0.214 0.653,-0.1079 0.81698,-0.027 0.79454,-0.0628 0.67854,-0.053 0.79087,-0.17264 0.56562,-0.121 0.63715,-0.17875 0.68913,-0.26506 0.55289,-0.20066 0.73423,-0.3405 0.61665,-0.35508 0.52125,-0.25785 0.66012,-0.0983 0.77741,0.004 0.58724,0.004 0.77301,0.23407 0.71244,0.35724 0.74932,0.26303 0.68625,0.24515 0.56546,0.20321 1.04373,-0.67393 -0.0808,-0.63839 -0.1839,-0.94707 -0.29806,-0.72435 -0.37361,-0.63909 -0.41209,-0.77965 -0.26687,-0.60314 -0.33209,-0.75155 -0.18836,-0.38899 -0.16707,-0.28592 -0.20767,-0.29192 -0.15533,-0.19881 -0.11565,-0.19895 -0.0684,-0.33504 -0.037,-0.31644 0.36693,-0.31806 0.50934,-0.0626 0.91512,0.21342 0.83475,0.20018 0.74752,0.0847 0.83967,0.11575 0.80272,0.1243 0.84556,0.0557 0.88352,0.0111 0.74537,-0.16168 0.7172,-0.23018 0.67858,-0.23288 0.58662,-0.20013 0.82679,-0.25982 1.0605,-0.43759 1.03714,-0.47242 0.77512,-0.35936 0.6321,-0.26623 0.57976,-0.33647 0.71274,-0.32869 0.60401,-0.32683 0.62221,-0.32962 0.62169,-0.30241 0.56704,-0.28785 0.75581,-0.43161 0.57295,-0.31379 0.68606,-0.30845 0.55614,-0.34004 0.66069,-0.36729 0.49039,-0.36803 0.53906,-0.45834 0.54175,-0.46212 0.42209,-0.53098 0.20675,-0.4559 0.17552,-0.62579 -0.10469,-0.79041 0.22661,-0.62516 0.17115,-0.47215 0.32609,-0.59948 0.62051,-0.12308 0.65568,0.30211 0.59195,0.55314 0.54485,0.64908 0.56682,0.58781 0.62404,0.57231 0.79963,0.67887 0.66717,0.42031 0.76994,0.5087 0.72722,0.4164 0.84819,0.4358 0.72721,0.41226 0.57498,0.31987 0.63604,0.32496 0.53994,0.31736 0.39564,0.23538 0.38661,0.20692 0.40747,0.19933 0.32667,0.17724 0.35011,0.17612 0.23426,0.12279 0.24855,0.11373 0.40835,0.23204 0.36819,0.18196 0.31348,0.16776 0.311,0.15017 0.33145,0.13259 0.34252,0.011 0.35354,-0.0442 0.51929,-0.43089 0.43867,-0.47743 0.36068,-0.49831 0.4868,-0.47927 0.33802,-0.25601 0.4906,-0.0595 0.50373,0.21264 0.48614,0.12154 0.19887,0.13258 h 0.20992 l 0.19888,-0.011 0.20992,-0.0552 0.30936,-0.16573 0.3867,-0.24307 0.23202,-0.24306 0.49718,-0.47509 0.39775,-0.54138 0.4088,-0.58557 0.39774,-0.50824 0.35356,-0.48613 0.35355,-0.37565 0.34251,-0.32041 0.47508,-0.28726 0.44194,-0.0994 0.27622,0.13258 0.24307,0.24307 0.15468,0.47509 0.11048,0.90598 -0.0663,0.7513 -0.0331,0.7513 0.011,0.62977 0.14363,0.76235 0.0994,0.57452 0.44194,1.20429 0.50824,1.11591 0.54137,1.03856 0.89494,1.45841 1.78986,2.35334 1.5247,1.75671 0.76235,1.11591 0.68501,1.35897 0.66291,1.55784 0.39775,1.37002 0.26516,1.1601 0.15468,1.06066 0.23202,1.61309 v 0.74025 l -0.0552,0.3646 -0.12153,0.19335 -0.13259,0.12706 -0.19335,0.0718 -0.28726,0.0111 -0.56021,-0.10293 -0.60156,-0.13281 -0.5625,-0.14844 -0.59375,-0.10938 -0.75782,-0.0312 H 619.774 l -0.51562,0.10938 -0.48438,0.17187 -0.45312,0.25782 -0.5,0.46875 -0.27303,0.31249 -0.33145,0.49166 -0.34803,0.62424 -0.32041,0.74025 -0.52481,1.46946 -0.49718,1.5247 -0.51845,1.55587"
      />
    </svg>
  )
};

export default SVG;
