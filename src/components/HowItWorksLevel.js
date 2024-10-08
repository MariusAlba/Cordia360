import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ArrowRight } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

function HowItWorks() {
  return (
    <div className='Howitworksdiv'>
    <h1>HOW IT WORKS</h1>
    <Row xs={1} md={4} className="g-4" >
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="" style={{border: 0}}>
            <Card.Img variant="top" src="data:image/svg+xml,%3csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.75 17.5C18.4185 17.5 18.1005 17.6317 17.8661 17.8661C17.6317 18.1005 17.5 18.4185 17.5 18.75C17.5 19.0815 17.6317 19.3995 17.8661 19.6339C18.1005 19.8683 18.4185 20 18.75 20H31.25C31.5815 20 31.8995 19.8683 32.1339 19.6339C32.3683 19.3995 32.5 19.0815 32.5 18.75C32.5 18.4185 32.3683 18.1005 32.1339 17.8661C31.8995 17.6317 31.5815 17.5 31.25 17.5H18.75ZM18.75 32.5C18.4185 32.5 18.1005 32.6317 17.8661 32.8661C17.6317 33.1005 17.5 33.4185 17.5 33.75C17.5 34.0815 17.6317 34.3995 17.8661 34.6339C18.1005 34.8683 18.4185 35 18.75 35H23.75C24.0815 35 24.3995 34.8683 24.6339 34.6339C24.8683 34.3995 25 34.0815 25 33.75C25 33.4185 24.8683 33.1005 24.6339 32.8661C24.3995 32.6317 24.0815 32.5 23.75 32.5H18.75ZM16.25 5C15.9185 5 15.6005 5.1317 15.3661 5.36612C15.1317 5.60054 15 5.91848 15 6.25V7.5H13.75C12.7554 7.5 11.8016 7.89509 11.0983 8.59835C10.3951 9.30161 10 10.2554 10 11.25V41.25C10 42.2446 10.3951 43.1984 11.0983 43.9017C11.8016 44.6049 12.7554 45 13.75 45H28.4175C28.0063 44.2182 27.7284 43.3732 27.595 42.5H13.75C13.4185 42.5 13.1005 42.3683 12.8661 42.1339C12.6317 41.8995 12.5 41.5815 12.5 41.25V11.25C12.5 10.9185 12.6317 10.6005 12.8661 10.3661C13.1005 10.1317 13.4185 10 13.75 10H36.25C36.5815 10 36.8995 10.1317 37.1339 10.3661C37.3683 10.6005 37.5 10.9185 37.5 11.25V22.6025C38.3275 22.4636 39.1725 22.4636 40 22.6025V11.25C40 10.2554 39.6049 9.30161 38.9017 8.59835C38.1984 7.89509 37.2446 7.5 36.25 7.5H35V6.25C35 5.91848 34.8683 5.60054 34.6339 5.36612C34.3995 5.1317 34.0815 5 33.75 5C33.4185 5 33.1005 5.1317 32.8661 5.36612C32.6317 5.60054 32.5 5.91848 32.5 6.25V7.5H26.25V6.25C26.25 5.91848 26.1183 5.60054 25.8839 5.36612C25.6495 5.1317 25.3315 5 25 5C24.6685 5 24.3505 5.1317 24.1161 5.36612C23.8817 5.60054 23.75 5.91848 23.75 6.25V7.5H17.5V6.25C17.5 5.91848 17.3683 5.60054 17.1339 5.36612C16.8995 5.1317 16.5815 5 16.25 5ZM38.75 35C40.0761 35 41.3479 34.4732 42.2855 33.5355C43.2232 32.5979 43.75 31.3261 43.75 30C43.75 28.6739 43.2232 27.4022 42.2855 26.4645C41.3479 25.5268 40.0761 25 38.75 25C37.4239 25 36.1521 25.5268 35.2145 26.4645C34.2768 27.4022 33.75 28.6739 33.75 30C33.75 31.3261 34.2768 32.5979 35.2145 33.5355C36.1521 34.4732 37.4239 35 38.75 35ZM38.75 47.5C45 47.5 47.5 44.3625 47.5 41.25C47.5 40.2554 47.1049 39.3016 46.4016 38.5984C45.6984 37.8951 44.7446 37.5 43.75 37.5H33.75C32.7554 37.5 31.8016 37.8951 31.0983 38.5984C30.3951 39.3016 30 40.2554 30 41.25C30 44.375 32.5 47.5 38.75 47.5ZM18.75 25C18.4185 25 18.1005 25.1317 17.8661 25.3661C17.6317 25.6005 17.5 25.9185 17.5 26.25C17.5 26.5815 17.6317 26.8995 17.8661 27.1339C18.1005 27.3683 18.4185 27.5 18.75 27.5H27.5C27.8315 27.5 28.1495 27.3683 28.3839 27.1339C28.6183 26.8995 28.75 26.5815 28.75 26.25C28.75 25.9185 28.6183 25.6005 28.3839 25.3661C28.1495 25.1317 27.8315 25 27.5 25H18.75Z' fill='%2329889c'/%3e%3c/svg%3e" />
            <Card.Body>
              <Card.Title >Step 1</Card.Title>
              <Card.Text>
                The clinician based on the patient's documentation and test results onboard the patient.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
       {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="" style={{border: 0}}>
            <Card.Img variant="top" src="data:image/svg+xml,%3csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M42.9688 35.9375C43.5901 35.9368 44.1859 35.6896 44.6252 35.2502C45.0646 34.8108 45.3118 34.2151 45.3125 33.5938V10.1562C45.3118 9.53487 45.0646 8.93915 44.6252 8.49977C44.1859 8.06039 43.5901 7.81322 42.9688 7.8125H7.03125C6.40987 7.81322 5.81415 8.06039 5.37477 8.49977C4.93539 8.93915 4.68822 9.53487 4.6875 10.1562V33.5938C4.68822 34.2151 4.93539 34.8108 5.37477 35.2502C5.81415 35.6896 6.40987 35.9368 7.03125 35.9375H42.9688ZM7.8125 10.9375H42.1875V32.8125H7.8125V10.9375ZM1.5625 40.625C1.5625 39.7621 2.26206 39.0625 3.125 39.0625H46.875C47.7379 39.0625 48.4375 39.7621 48.4375 40.625V40.625C48.4375 41.4879 47.7379 42.1875 46.875 42.1875H3.125C2.26206 42.1875 1.5625 41.4879 1.5625 40.625V40.625Z' fill='%2329889c'/%3e%3cpath d='M21.2357 15.2344C19.1967 15.2344 17.708 17.3645 17.708 19.6613C17.708 20.2785 17.8041 20.8695 17.9736 21.4309C18.0564 21.7055 18.1568 21.973 18.2717 22.2332C19.876 25.8613 24.3486 28.073 24.3486 28.073C24.3486 28.073 25.3381 27.552 26.5533 26.6301C25.7838 26.0863 24.7197 25.1664 24.2064 23.9656C24.1446 23.8213 24.0915 23.6734 24.0475 23.5227C23.9542 23.2058 23.9066 22.8772 23.9061 22.5469C23.9061 21.2793 24.7002 20.1043 25.7873 20.1043C26.542 20.1043 27.1018 20.6316 27.4475 21.3793C27.7932 20.6316 28.3533 20.1043 29.1076 20.1043C29.8272 20.1043 30.4178 20.6184 30.7354 21.3332C30.8975 20.798 30.9893 20.2395 30.9893 19.6613C30.9893 17.3645 29.5006 15.2344 27.4615 15.2344C26.0467 15.2344 24.9967 16.1902 24.3486 17.5457C23.7006 16.1902 22.6506 15.2344 21.2357 15.2344ZM30.3861 22.3051C30.4443 22.3059 30.5017 22.3182 30.5551 22.3412C30.6085 22.3642 30.6569 22.3975 30.6974 22.4393C30.7379 22.481 30.7698 22.5303 30.7913 22.5843C30.8127 22.6384 30.8233 22.6961 30.8225 22.7543C30.8029 24.2035 30.1018 25.1898 29.4205 25.8012C29.1372 26.0549 28.8261 26.2757 28.4932 26.4594C28.363 26.5311 28.2292 26.5962 28.0924 26.6543C28.0811 26.6586 28.0721 26.6621 28.0654 26.6652L28.0572 26.6684L28.0541 26.6695L28.0529 26.6699C27.9442 26.7068 27.8254 26.7 27.7216 26.651C27.6177 26.602 27.537 26.5145 27.4964 26.4071C27.4558 26.2998 27.4584 26.1808 27.5038 26.0753C27.5492 25.9699 27.6337 25.8861 27.7397 25.8418L27.7416 25.841L27.7557 25.8352C27.8615 25.7898 27.965 25.7392 28.0658 25.6836C28.3398 25.5326 28.5959 25.3511 28.8291 25.1426C29.3811 24.6473 29.9217 23.8793 29.9373 22.7418C29.9381 22.6836 29.9503 22.6262 29.9733 22.5728C29.9962 22.5193 30.0295 22.471 30.0712 22.4304C30.1129 22.3899 30.1622 22.3579 30.2162 22.3364C30.2702 22.3149 30.328 22.3043 30.3861 22.3051Z' fill='%2329889c'/%3e%3c/svg%3e" />
            <Card.Body>
              <Card.Title >Step 2</Card.Title>
              <Card.Text>
                The patient gets a personalized care plan assigned and gets access to the Cordia® app.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
       {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="" style={{border: 0}}>
            <Card.Img variant="top" src="data:image/svg+xml,%3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='3333.000000pt' height='3333.000000pt' viewBox='0 0 3333.000000 3333.000000' preserveAspectRatio='xMidYMid meet'%3e%3cg transform='translate(0.000000%2c3333.000000) scale(0.100000%2c-0.100000)' fill='%2329889c' stroke='none'%3e%3cpath d='M10835 30539 c-439 -43 -899 -209 -1270 -459 -226 -153 -509 -421 -666 -630 -336 -448 -520 -941 -559 -1497 -17 -233 -8 -22599 9 -22718 18 -135 58 -327 92 -444 96 -335 277 -685 497 -961 89 -112 325 -351 432 -436 385 -310 820 -500 1350 -591 100 -17 384 -18 5880 -21 6303 -3 5884 -6 6175 53 844 171 1574 743 1950 1528 152 317 239 646 265 1002 14 198 14 22420 0 22606 -36 461 -170 875 -409 1259 -128 208 -253 361 -437 540 -421 408 -913 651 -1534 757 -100 17 -381 18 -5895 19 -3197 1 -5830 -2 -5880 -7z m11600 -2092 c116 -35 204 -87 285 -167 88 -87 137 -173 172 -300 l23 -85 0 -10190 c0 -9934 0 -10192 -19 -10260 -73 -272 -259 -443 -532 -490 -79 -13 -708 -15 -5739 -13 l-5650 3 -78 22 c-247 71 -408 243 -470 505 -9 42 -12 2160 -12 10233 0 9850 1 10183 18 10258 60 253 250 437 507 492 55 11 951 13 5750 12 5456 -2 5687 -3 5745 -20z m-3685 -23587 l0 -690 -2085 0 -2085 0 0 690 0 690 2085 0 2085 0 0 -690z'/%3e%3cpath d='M15255 22350 c-11 -5 -49 -9 -84 -9 -35 -1 -86 -8 -115 -17 -28 -9 -73 -23 -101 -31 -27 -8 -64 -21 -82 -29 -17 -8 -36 -14 -43 -14 -7 0 -26 -10 -43 -22 -17 -13 -63 -38 -102 -58 -72 -36 -96 -52 -219 -153 -103 -85 -261 -273 -291 -347 -10 -24 -38 -75 -44 -80 -13 -11 -41 -73 -41 -89 0 -9 -5 -22 -11 -28 -6 -6 -14 -26 -19 -44 -5 -19 -20 -78 -34 -131 -13 -54 -27 -134 -30 -179 -4 -45 -9 -85 -12 -90 -9 -15 17 -240 32 -284 8 -23 14 -56 14 -75 1 -19 7 -46 15 -60 8 -14 14 -37 15 -51 0 -14 7 -34 15 -45 8 -10 15 -25 15 -32 0 -6 11 -33 24 -60 107 -215 104 -212 179 -212 53 0 76 21 84 78 4 31 -1 51 -20 88 -30 56 -77 160 -77 169 0 7 -37 93 -50 117 -6 10 -10 31 -10 47 0 15 -7 48 -15 71 -21 59 -21 367 0 425 8 22 15 52 15 67 0 25 28 95 86 213 13 28 24 55 24 61 0 21 123 177 204 259 75 76 175 155 194 155 5 0 17 9 27 20 10 11 37 29 59 39 102 48 154 70 181 77 17 4 36 11 43 17 31 24 212 48 362 48 129 0 251 -10 265 -22 6 -4 30 -11 53 -15 23 -3 47 -13 53 -20 6 -8 24 -14 40 -14 15 0 30 -4 33 -9 3 -5 22 -12 41 -15 19 -4 35 -11 35 -16 0 -6 7 -10 16 -10 9 0 28 -6 42 -14 15 -8 34 -17 42 -21 20 -8 43 -22 118 -73 35 -23 67 -42 70 -42 4 0 32 -24 63 -52 70 -67 143 -117 179 -125 43 -8 90 12 145 63 78 71 131 114 142 114 6 0 13 6 16 13 2 7 23 22 46 32 22 11 41 23 41 28 0 4 10 12 23 17 12 6 29 14 37 19 14 8 41 20 122 55 20 9 43 16 51 16 9 0 19 5 22 10 3 6 18 10 32 10 15 0 35 7 44 16 51 46 347 69 559 45 93 -11 141 -24 171 -45 13 -9 33 -16 45 -16 20 0 60 -17 157 -66 16 -8 34 -14 41 -14 7 0 21 -9 31 -20 10 -11 37 -31 60 -44 41 -24 66 -44 148 -116 49 -43 217 -258 217 -277 0 -4 17 -43 38 -88 59 -123 72 -154 72 -175 0 -11 7 -40 16 -66 23 -68 22 -397 -1 -475 -9 -30 -23 -79 -32 -109 -9 -30 -23 -62 -30 -71 -7 -8 -13 -21 -13 -27 0 -7 -4 -20 -9 -30 -36 -70 -81 -171 -86 -192 -7 -29 6 -69 30 -93 23 -24 107 -23 127 1 14 15 29 41 105 180 13 24 23 50 23 58 0 9 6 28 14 42 19 38 46 126 46 150 0 12 5 31 10 44 9 20 23 106 46 284 3 24 1 51 -6 63 -6 12 -14 61 -17 109 -3 48 -10 98 -16 112 -5 14 -13 43 -17 65 -9 46 -27 98 -46 137 -8 14 -14 33 -14 42 0 9 -11 33 -23 54 -13 20 -41 68 -61 106 -20 38 -44 75 -52 83 -8 8 -19 23 -24 33 -25 46 -171 198 -250 258 -127 98 -108 86 -230 147 -41 21 -77 42 -80 46 -3 4 -18 11 -33 14 -15 4 -30 11 -33 16 -3 5 -15 9 -27 9 -12 0 -35 7 -51 15 -15 8 -39 15 -51 15 -13 0 -36 5 -52 12 -93 38 -588 39 -683 0 -14 -5 -50 -15 -80 -21 -61 -13 -113 -36 -244 -105 -27 -14 -57 -26 -66 -26 -10 0 -20 -7 -24 -15 -3 -8 -12 -15 -21 -15 -9 0 -40 -18 -70 -40 -30 -22 -59 -40 -65 -40 -5 0 -10 -4 -10 -8 0 -9 -88 -75 -112 -85 -10 -3 -18 -11 -18 -17 0 -19 -25 -9 -50 20 -13 17 -28 30 -34 30 -5 0 -33 18 -62 40 -29 22 -57 40 -61 40 -4 0 -22 14 -40 30 -18 17 -38 30 -46 30 -8 0 -20 7 -27 15 -7 8 -20 15 -30 15 -10 0 -23 7 -30 15 -7 8 -20 15 -30 15 -10 0 -23 7 -30 15 -7 8 -21 15 -31 15 -10 0 -20 4 -23 9 -3 5 -18 12 -32 15 -15 4 -33 14 -41 21 -8 8 -27 15 -43 15 -16 0 -32 5 -35 10 -3 6 -22 10 -41 10 -20 0 -45 5 -57 12 -42 23 -442 46 -482 28z'/%3e%3cpath d='M13569 20453 c-34 -55 -41 -85 -48 -218 -5 -82 -3 -134 5 -165 7 -25 15 -64 18 -88 4 -24 10 -51 15 -60 5 -9 17 -44 26 -77 9 -33 23 -73 31 -88 8 -16 14 -38 14 -49 0 -11 6 -32 14 -46 7 -15 22 -45 31 -67 10 -22 22 -47 27 -55 4 -8 32 -64 62 -125 30 -60 70 -134 90 -164 20 -29 36 -55 36 -57 0 -9 85 -142 111 -174 16 -19 29 -38 29 -42 0 -11 103 -150 124 -167 9 -7 16 -19 16 -26 0 -6 10 -20 21 -31 12 -10 29 -31 38 -45 46 -74 412 -470 470 -509 13 -8 48 -41 79 -72 30 -32 59 -58 63 -58 4 0 33 -25 64 -55 32 -30 63 -55 69 -55 7 0 26 -13 44 -30 18 -16 36 -30 39 -30 2 0 28 -20 56 -45 29 -25 57 -45 63 -45 6 0 17 -6 23 -14 7 -8 31 -24 54 -35 23 -12 60 -35 82 -51 41 -30 118 -72 260 -142 44 -22 93 -46 108 -54 16 -8 37 -14 47 -14 9 0 23 -7 30 -15 7 -8 23 -15 36 -15 14 0 32 -4 42 -10 51 -28 115 -50 132 -45 12 4 22 19 26 42 4 20 13 48 20 62 8 14 14 36 14 48 0 12 4 32 9 45 5 13 17 52 26 88 9 36 23 78 31 93 8 16 14 43 14 61 0 18 6 55 14 82 37 131 19 610 -26 679 -4 6 -16 39 -28 74 -12 35 -29 75 -36 90 -8 14 -14 32 -14 39 0 6 -4 12 -10 12 -5 0 -10 8 -10 18 0 9 -25 46 -55 82 -30 35 -55 67 -55 72 0 11 -212 199 -235 208 -11 4 -38 22 -60 40 -22 18 -49 36 -60 42 -33 15 -56 30 -149 93 -48 33 -95 65 -104 70 -9 6 -22 16 -30 23 -7 6 -18 12 -24 12 -6 0 -29 15 -52 33 -62 49 -166 120 -196 133 -8 4 -45 31 -81 61 -36 29 -71 53 -76 53 -5 0 -18 9 -28 20 -10 11 -22 20 -27 20 -5 0 -27 17 -49 38 -23 20 -49 40 -60 44 -10 4 -19 12 -19 18 0 5 -11 10 -25 10 -19 0 -28 -8 -40 -36 -19 -46 -19 -69 2 -130 12 -38 35 -67 98 -129 45 -44 101 -93 126 -110 24 -16 46 -33 47 -37 2 -5 10 -8 17 -8 8 0 26 -17 41 -38 15 -21 45 -51 67 -66 21 -16 51 -46 66 -67 16 -21 45 -58 65 -82 60 -71 106 -173 106 -234 0 -48 -3 -55 -48 -101 -38 -39 -58 -51 -93 -57 -112 -20 -226 2 -362 71 -27 13 -55 24 -63 24 -8 0 -17 7 -20 15 -4 8 -14 15 -24 15 -11 0 -22 4 -25 10 -3 5 -43 38 -88 72 -103 78 -290 271 -353 363 -26 39 -60 83 -75 99 -16 17 -29 35 -29 41 0 6 -20 41 -44 79 -47 71 -156 282 -156 301 0 6 -5 16 -11 22 -17 17 -79 175 -79 204 0 14 -4 29 -9 35 -6 5 -14 27 -20 49 -26 104 -33 131 -41 150 -5 11 -12 31 -15 45 -21 78 -69 93 -106 33z'/%3e%3cpath d='M19278 20468 c-8 -12 -18 -41 -22 -63 -4 -22 -11 -44 -16 -50 -4 -5 -11 -27 -14 -49 -4 -21 -11 -46 -15 -55 -14 -29 -41 -118 -41 -137 0 -11 -7 -28 -15 -38 -8 -11 -15 -28 -15 -38 0 -10 -4 -26 -10 -36 -5 -9 -14 -28 -20 -42 -5 -14 -14 -32 -20 -40 -5 -8 -30 -60 -56 -115 -26 -55 -56 -113 -68 -130 -11 -16 -29 -46 -40 -65 -10 -19 -31 -54 -47 -78 -16 -24 -29 -47 -29 -51 0 -5 -8 -15 -17 -22 -9 -8 -41 -48 -72 -89 -55 -76 -315 -340 -334 -340 -5 0 -30 -17 -56 -37 -66 -55 -111 -79 -276 -146 -100 -42 -267 -35 -326 13 -44 36 -72 95 -66 139 4 35 27 101 38 111 3 3 15 24 26 46 12 23 34 56 50 72 15 17 46 54 67 81 22 28 42 51 46 51 4 0 36 28 71 63 35 35 81 74 102 86 80 49 227 192 227 221 0 10 5 22 10 25 18 11 11 118 -10 145 l-19 25 -34 -18 c-19 -10 -57 -39 -85 -63 -28 -24 -55 -44 -61 -44 -6 0 -11 -3 -11 -8 0 -4 -17 -16 -37 -27 -21 -11 -53 -34 -72 -51 -18 -18 -45 -38 -60 -45 -14 -7 -42 -26 -62 -41 -20 -15 -40 -28 -44 -28 -7 0 -86 -59 -95 -71 -3 -4 -23 -17 -45 -28 -64 -35 -77 -44 -134 -88 -29 -24 -59 -43 -66 -43 -7 0 -15 -3 -17 -7 -3 -8 -77 -59 -113 -78 -11 -6 -42 -28 -68 -48 -27 -20 -54 -37 -60 -37 -7 0 -38 -25 -70 -55 -32 -30 -61 -55 -66 -55 -13 0 -82 -73 -98 -105 -9 -16 -28 -42 -42 -56 -36 -37 -42 -46 -75 -114 -39 -82 -84 -207 -103 -285 -24 -96 -29 -480 -8 -562 8 -33 15 -75 15 -93 0 -19 4 -36 9 -39 5 -3 18 -50 30 -103 12 -54 26 -105 31 -114 5 -9 12 -34 16 -55 3 -22 10 -43 14 -49 5 -5 13 -29 19 -51 6 -23 17 -44 24 -47 18 -7 67 3 67 14 0 5 8 9 18 9 10 0 27 7 38 15 10 8 30 15 44 15 14 0 34 7 44 15 11 8 30 15 42 15 12 0 27 7 34 15 7 8 21 15 30 15 17 0 79 28 90 41 3 3 32 19 65 35 117 59 186 98 209 119 13 12 43 32 67 44 24 13 85 53 134 90 50 37 104 76 120 87 17 10 48 36 69 57 21 21 60 54 85 73 25 20 59 51 74 70 16 19 33 34 39 34 14 0 258 242 258 257 0 6 17 26 39 45 21 18 60 60 86 93 27 33 61 71 75 85 14 14 29 32 32 40 4 8 35 51 71 95 68 85 157 211 157 224 0 4 13 20 28 37 16 16 37 48 47 72 11 23 22 42 27 42 4 0 8 5 8 12 0 6 8 21 19 32 20 23 131 233 131 249 0 6 11 25 25 43 14 18 25 38 25 44 0 7 7 26 16 43 30 58 34 66 43 104 9 35 23 80 42 128 4 11 10 33 14 50 4 16 11 32 16 36 5 3 14 34 20 69 5 35 14 70 18 79 15 31 3 282 -16 336 -26 72 -35 84 -69 91 -25 5 -33 1 -46 -18z'/%3e%3cpath d='M18175 16531 c-54 -33 -70 -59 -70 -113 0 -44 4 -53 37 -84 95 -86 222 -1 188 126 -8 30 -21 47 -50 65 -47 30 -65 31 -105 6z'/%3e%3cpath d='M17623 16492 l-23 -3 0 -284 c0 -159 -4 -286 -9 -289 -5 -4 -35 21 -67 54 -32 33 -63 60 -70 60 -6 0 -17 7 -24 15 -7 8 -19 15 -27 15 -8 0 -29 6 -46 14 -61 27 -186 39 -273 26 -126 -19 -189 -47 -280 -126 -101 -88 -167 -228 -177 -379 -9 -126 16 -324 44 -345 4 -3 23 -35 43 -72 21 -37 54 -81 74 -98 88 -75 139 -111 162 -116 14 -3 40 -12 58 -20 23 -10 71 -14 157 -14 86 0 134 4 157 14 18 8 44 17 58 20 29 6 150 102 188 150 23 28 32 7 32 -74 0 -47 4 -82 11 -86 9 -5 124 -8 172 -5 4 1 7 347 7 770 l0 769 -72 4 c-40 2 -83 2 -95 0z m-308 -548 c90 -30 117 -48 184 -126 84 -97 101 -148 101 -303 0 -161 -29 -235 -129 -327 -94 -88 -134 -103 -271 -102 -124 0 -139 5 -225 69 -59 45 -94 85 -116 135 -11 25 -25 56 -32 69 -20 40 -16 276 6 335 23 64 80 148 120 178 106 80 250 109 362 72z'/%3e%3cpath d='M13410 16413 c-25 -8 -70 -22 -100 -31 -118 -36 -226 -108 -310 -209 -64 -77 -96 -137 -135 -257 -33 -102 -35 -114 -35 -249 0 -106 4 -149 15 -171 8 -15 15 -36 15 -45 0 -9 7 -29 15 -45 8 -15 15 -36 15 -46 0 -10 7 -23 15 -30 8 -7 15 -19 15 -27 0 -40 145 -203 220 -246 30 -18 64 -37 75 -44 18 -11 32 -17 90 -42 89 -37 344 -56 412 -30 15 6 46 14 68 19 59 12 105 32 150 63 22 15 45 27 52 27 28 0 203 191 203 223 0 8 7 20 15 27 9 7 15 23 13 34 -3 19 -11 21 -73 24 -105 5 -130 -3 -156 -46 -28 -47 -119 -142 -136 -142 -7 0 -13 -4 -13 -9 0 -5 -8 -11 -17 -15 -10 -3 -25 -9 -33 -14 -51 -30 -73 -36 -149 -42 -155 -13 -263 6 -346 60 -16 11 -39 24 -51 29 -43 19 -147 145 -176 211 -42 99 -48 136 -48 291 0 154 6 191 45 276 8 17 15 35 15 41 0 15 160 192 173 192 7 0 39 13 72 29 79 38 139 51 235 51 132 0 281 -52 346 -122 39 -42 111 -134 116 -149 4 -13 180 -20 200 -8 10 6 -5 43 -59 142 -24 46 -161 170 -216 197 -29 14 -54 27 -57 31 -3 3 -23 11 -45 16 -189 51 -201 53 -294 52 -53 -1 -116 -8 -141 -16z'/%3e%3cpath d='M20280 16330 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z'/%3e%3cpath d='M16340 16103 c-71 -17 -76 -18 -105 -36 -54 -33 -74 -50 -105 -92 -27 -37 -36 -42 -48 -33 -11 10 -13 27 -8 80 l6 68 -90 0 -90 0 0 -564 c0 -505 2 -564 16 -570 9 -3 47 -6 85 -6 66 0 69 1 75 26 4 15 5 176 2 358 -6 366 -3 393 56 471 71 95 131 125 248 125 l69 0 -3 93 c-3 107 -2 106 -108 80z'/%3e%3cpath d='M14930 16096 c-79 -13 -83 -14 -170 -54 -74 -33 -193 -155 -226 -231 -40 -90 -41 -93 -53 -169 -14 -95 -14 -159 3 -257 18 -103 31 -135 88 -222 41 -62 122 -143 142 -143 4 0 22 -11 40 -25 55 -42 127 -58 283 -62 114 -3 148 -1 172 11 17 9 39 16 51 16 25 0 174 96 211 137 15 15 35 42 45 58 10 17 21 32 24 35 19 18 50 72 50 87 0 10 7 38 16 62 23 68 21 296 -4 382 -11 36 -26 76 -33 90 -41 72 -153 199 -176 199 -7 0 -13 4 -13 8 0 4 -15 14 -32 21 -18 8 -49 20 -68 28 -42 18 -191 43 -240 41 -19 0 -69 -6 -110 -12z m226 -152 c82 -26 117 -47 165 -96 85 -88 129 -199 129 -328 0 -90 -11 -134 -53 -219 -29 -57 -108 -151 -128 -151 -4 0 -14 -6 -21 -12 -43 -41 -89 -52 -212 -52 -121 0 -122 0 -169 32 -27 18 -52 32 -56 32 -13 0 -71 68 -94 113 -13 23 -27 49 -32 57 -34 53 -47 256 -21 340 31 103 117 218 187 251 101 49 217 61 305 33z'/%3e%3cpath d='M19015 16098 c-114 -18 -220 -76 -285 -155 -25 -30 -53 -64 -62 -75 -9 -11 -25 -41 -34 -67 -10 -25 -21 -50 -25 -56 -4 -5 -13 -58 -20 -117 -10 -86 -10 -126 0 -205 15 -120 32 -169 87 -253 38 -58 123 -150 139 -150 4 0 23 -12 42 -27 54 -41 113 -55 257 -60 136 -5 134 -5 255 50 24 11 73 49 110 84 36 35 71 61 78 59 8 -3 13 -35 15 -93 l3 -88 72 -2 c47 0 76 3 82 11 7 8 12 208 13 569 3 456 1 558 -10 562 -8 3 -47 5 -88 5 l-74 0 0 -85 c0 -111 -12 -117 -82 -40 -29 31 -62 61 -73 66 -11 5 -27 13 -35 18 -42 24 -92 40 -158 50 -82 12 -121 12 -207 -1z m257 -156 c7 -7 22 -12 34 -12 12 0 27 -7 34 -15 7 -8 20 -15 30 -15 21 0 110 -94 134 -142 9 -18 20 -40 25 -48 39 -70 50 -200 26 -304 -10 -42 -21 -76 -25 -76 -3 0 -14 -19 -25 -42 -20 -46 -88 -125 -120 -139 -11 -5 -40 -21 -65 -36 -42 -25 -53 -27 -160 -27 -125 0 -136 3 -232 72 -55 40 -94 93 -137 184 -28 62 -31 76 -31 170 0 110 14 168 63 251 36 62 106 137 127 137 9 0 23 7 30 15 7 8 22 15 34 15 12 0 26 4 32 9 16 16 47 20 132 17 46 -1 88 -8 94 -14z'/%3e%3cpath d='M18142 15518 l3 -573 73 -1 c40 -1 74 2 77 6 3 4 5 261 5 571 l1 564 -81 3 -80 3 2 -573z'/%3e%3cpath d='M16615 14231 c-99 -24 -145 -84 -145 -188 0 -79 -10 -93 -70 -93 -51 0 -64 -8 -54 -33 4 -11 15 -14 43 -10 21 3 48 0 60 -6 21 -12 21 -16 21 -291 0 -296 -2 -280 43 -284 9 -1 13 66 17 289 l5 290 219 3 c153 2 223 -1 232 -9 18 -15 19 -158 2 -181 -11 -13 -39 -17 -144 -20 -91 -3 -137 -8 -148 -17 -23 -19 -20 -73 5 -105 31 -39 53 -30 59 24 l5 45 107 -1 c58 -1 112 -5 118 -9 7 -4 10 -55 9 -152 0 -80 3 -149 8 -154 5 -5 17 -7 26 -3 15 5 17 37 19 293 l3 286 170 0 170 0 3 -111 3 -112 -37 -21 c-31 -19 -41 -20 -70 -11 -19 7 -41 19 -50 27 -14 14 -17 14 -36 -4 -18 -19 -19 -22 -5 -50 9 -16 23 -36 32 -43 20 -16 100 -120 106 -136 2 -6 25 -35 51 -64 31 -34 53 -50 63 -46 22 8 18 38 -10 68 -14 15 -25 31 -25 35 0 5 -12 21 -27 38 -81 86 -94 115 -53 115 30 0 91 41 101 67 5 13 9 71 9 127 0 72 4 107 13 114 15 13 165 14 190 1 16 -9 17 -33 17 -284 0 -265 1 -275 20 -285 11 -6 25 -8 30 -5 6 4 10 114 10 284 0 227 3 281 14 290 9 8 41 10 93 7 43 -2 88 -5 101 -5 22 -1 22 -4 22 -120 0 -113 -1 -119 -25 -145 -27 -29 -27 -39 -2 -99 12 -28 45 -44 71 -34 8 3 16 22 18 44 l3 38 112 3 c133 3 122 16 126 -153 2 -90 5 -110 17 -110 13 0 15 39 18 279 1 159 6 284 12 291 13 16 253 13 273 -3 20 -17 40 -85 32 -111 -12 -40 -55 -81 -85 -81 -40 0 -53 -21 -45 -72 6 -34 19 -54 67 -100 32 -32 67 -58 78 -58 10 0 31 -5 45 -12 19 -9 28 -9 37 0 7 7 23 12 35 12 13 0 36 9 51 19 15 11 37 22 50 26 22 6 22 5 22 -88 0 -99 7 -115 46 -100 13 5 15 39 13 285 -1 153 1 282 5 285 11 12 180 12 193 1 10 -8 13 -76 13 -289 0 -153 4 -280 8 -283 5 -3 18 -2 30 1 22 5 22 6 22 284 0 271 1 279 21 289 11 6 35 11 52 10 51 -3 57 -1 57 20 0 20 -7 20 -1388 20 -1066 0 -1391 3 -1400 12 -18 18 -15 125 5 158 21 37 89 70 143 70 70 0 162 -37 230 -92 61 -49 91 -56 89 -21 0 16 -16 31 -114 107 -16 13 -43 26 -60 30 -16 4 -48 11 -70 16 -47 11 -108 11 -150 1z m1632 -333 c17 -14 18 -219 1 -236 -15 -15 -181 -16 -209 -2 -17 10 -19 22 -19 125 0 75 4 115 11 117 28 9 204 6 216 -4z m611 -2 c16 -10 16 -211 0 -272 -9 -32 -23 -54 -48 -74 -31 -24 -44 -27 -107 -28 -69 0 -73 1 -107 36 -28 28 -36 43 -36 71 1 33 5 38 50 60 32 16 53 33 61 53 15 36 6 104 -17 129 -15 17 -16 22 -4 29 16 10 191 7 208 -4z'/%3e%3cpath d='M14475 14218 c-63 -10 -105 -41 -105 -79 0 -10 -4 -21 -10 -24 -5 -3 -10 -17 -10 -30 0 -18 -4 -22 -20 -18 -11 3 -20 9 -20 13 0 4 -23 35 -52 69 -40 48 -57 61 -80 61 -18 0 -28 -5 -28 -15 0 -8 43 -59 95 -113 53 -53 94 -104 93 -112 -3 -13 -70 -15 -526 -18 l-523 -2 3 -22 c3 -20 7 -21 123 -20 84 1 121 -2 127 -11 4 -6 8 -58 8 -114 l0 -101 -32 -27 c-34 -29 -75 -29 -104 0 -29 28 -79 11 -67 -24 4 -9 29 -45 58 -81 28 -36 60 -78 70 -95 10 -16 29 -41 41 -55 13 -14 34 -38 48 -54 21 -25 27 -28 40 -17 22 19 20 28 -14 71 -16 21 -30 40 -30 43 0 3 -14 21 -31 39 -68 73 -75 108 -21 108 16 0 35 7 42 16 10 11 23 14 54 8 23 -3 46 -10 51 -15 6 -4 44 -9 85 -11 l75 -3 3 -127 c2 -118 4 -127 23 -133 12 -4 25 -3 30 2 5 5 10 137 11 293 l3 285 242 2 243 3 6 -26 c4 -14 5 -85 2 -157 -4 -121 -7 -135 -31 -174 -30 -47 -76 -68 -133 -60 -34 5 -84 40 -84 59 0 5 -7 16 -15 24 -21 21 -19 50 5 89 28 45 62 65 110 65 45 0 63 21 38 46 -11 11 -27 12 -78 5 -56 -7 -68 -13 -95 -44 -91 -105 -50 -248 84 -294 49 -16 112 -4 148 29 19 18 25 19 38 8 12 -10 15 -29 14 -77 -2 -72 8 -91 40 -74 21 11 21 17 21 291 0 271 1 279 20 285 11 4 37 5 58 3 32 -3 37 0 40 20 3 21 0 22 -52 22 -50 0 -57 3 -73 28 -10 15 -23 31 -30 35 -23 14 -15 79 15 113 35 41 94 63 117 44 23 -19 38 0 26 33 -6 15 -14 26 -18 26 -5 -1 -35 -6 -68 -11z m-679 -318 c23 -9 24 -13 24 -116 0 -129 -3 -133 -106 -134 -104 0 -108 5 -105 131 2 78 6 107 17 115 18 14 137 16 170 4z'/%3e%3cpath d='M15340 14161 c-14 -27 -13 -42 6 -62 15 -17 19 -17 45 -3 47 24 35 84 -18 84 -12 0 -27 -9 -33 -19z'/%3e%3cpath d='M14812 13933 c3 -16 19 -19 123 -23 66 -3 126 -9 133 -13 20 -13 16 -174 -6 -217 -24 -49 -65 -59 -122 -30 -37 19 -44 20 -57 7 -13 -13 -13 -18 0 -43 9 -16 25 -39 36 -51 12 -12 21 -26 21 -30 0 -4 19 -28 41 -53 23 -25 59 -71 81 -102 23 -32 44 -58 47 -58 4 0 17 7 29 16 l22 15 -40 42 c-22 23 -40 45 -40 50 0 4 -20 33 -44 64 -24 31 -42 62 -39 69 3 8 20 14 39 14 21 0 37 6 42 17 9 15 15 16 58 3 27 -7 83 -14 124 -15 l75 -2 3 -130 c3 -136 8 -152 47 -137 13 5 15 46 15 285 l0 279 24 10 c14 5 127 8 253 7 l228 -2 0 -75 0 -75 -103 -1 c-104 -1 -109 -2 -167 -47 -54 -40 -83 -158 -50 -201 8 -11 15 -30 15 -43 0 -24 25 -66 69 -115 19 -22 28 -25 42 -17 27 14 23 37 -10 65 -38 31 -63 95 -64 165 -2 67 18 102 69 124 44 18 175 20 192 3 8 -8 12 -64 12 -185 l0 -172 -34 -16 c-47 -22 -73 -52 -58 -67 8 -8 25 -5 64 12 50 21 53 22 84 5 54 -29 67 -79 35 -131 -25 -41 -76 -59 -144 -50 -68 10 -114 35 -171 96 l-49 52 -20 -20 -20 -20 21 -27 c43 -54 164 -125 214 -125 15 0 33 -7 42 -15 18 -19 32 -19 39 -1 3 7 25 16 48 20 32 5 52 17 76 43 30 32 33 41 33 97 0 57 -3 65 -32 93 -18 17 -43 36 -56 42 l-22 12 2 287 3 287 53 1 c53 0 80 13 68 33 -5 8 -196 11 -642 11 -600 0 -635 -1 -632 -17z m516 -31 c17 -6 17 -223 0 -240 -15 -15 -136 -16 -172 -2 -26 9 -26 11 -26 118 0 64 4 112 11 119 10 10 161 15 187 5z'/%3e%3cpath d='M19427 13773 c-4 -3 -7 -19 -7 -34 0 -40 31 -55 61 -30 21 16 22 22 11 45 -11 25 -49 36 -65 19z'/%3e%3cpath d='M19424 13383 c-7 -26 4 -54 23 -60 5 -2 20 5 33 15 22 18 22 19 5 45 -23 35 -53 35 -61 0z'/%3e%3c/g%3e%3c/svg%3e" />
            <Card.Body>
              <Card.Title >Step 3</Card.Title>
              <Card.Text>
                The patient follows the care plan and involves informal caregivers to monitor the disease.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
       {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="" style={{border: 0}}>
            <Card.Img variant="top" src="data:image/svg+xml,%3csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_3444_421)'%3e%3cpath d='M15.625 35.375C15.625 34.8227 16.0727 34.375 16.625 34.375H24C24.5523 34.375 25 34.8227 25 35.375V49C25 49.5523 24.5523 50 24 50H16.625C16.0727 50 15.625 49.5523 15.625 49V35.375ZM3.125 44.75C3.125 44.1977 3.57272 43.75 4.125 43.75H11.5C12.0523 43.75 12.5 44.1977 12.5 44.75V49C12.5 49.5523 12.0523 50 11.5 50H4.125C3.57272 50 3.125 49.5523 3.125 49V44.75ZM40.625 38.5C40.625 37.9477 41.0727 37.5 41.625 37.5H49C49.5523 37.5 50 37.9477 50 38.5V49C50 49.5523 49.5523 50 49 50H41.625C41.0727 50 40.625 49.5523 40.625 49V38.5ZM28.125 29.125C28.125 28.5727 28.5727 28.125 29.125 28.125H36.5C37.0523 28.125 37.5 28.5727 37.5 29.125V49C37.5 49.5523 37.0523 50 36.5 50H29.125C28.5727 50 28.125 49.5523 28.125 49V29.125ZM50 2.42252C50 1.56336 48.9881 1.10418 48.3415 1.66994L32.671 15.3816C32.4094 15.6105 32.0477 15.6871 31.7157 15.584L15.6539 10.5922C15.342 10.4952 15.0025 10.5567 14.7444 10.7568L0.387302 21.8872C0.142981 22.0767 0 22.3684 0 22.6776V26.0821C0 26.9139 0.956454 27.3821 1.61341 26.8719L15.6816 15.9451C15.9399 15.7445 16.2798 15.6829 16.592 15.78L32.8403 20.8337C33.1725 20.937 33.5345 20.8603 33.7962 20.631L49.6589 6.73628C49.8757 6.5464 50 6.27223 50 5.98405V2.42252Z' fill='%2329889c'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_3444_421'%3e%3crect width='50' height='50' fill='rgba(255%2c255%2c255%2c1)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />
            <Card.Body>
              <Card.Title >Step 4</Card.Title>
              <Card.Text>
                  The clinician reviews the patient's data and makes adjustments or recommendations as needed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default HowItWorks;