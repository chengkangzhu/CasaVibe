import React from "react";

//imgs
import location1 from "../img/location/location (6).png";
import location2 from "../img/location/location (5).png";
import location3 from "../img/location/location (4).png";
import location4 from "../img/location/location (3).png";
import location5 from "../img/location/location (2).png";
import location6 from "../img/location/location (1).png";

//icons
import { FaTruckMoving } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const StoreCard = ({ img, name, description, openHour, link }) => {
	return (
		<div className="store_card">
			<img src={img} alt={name + " location image"} />
			<h5 className="h5 sb name">{name}</h5>
			<p className="p3">{description}</p>
			<p className="h7 md open_hour">Operational hours:</p>
			<p className="p3">{openHour}</p>
			<a className="h6 md read_more" href={link} target="_blank"  rel="noreferrer" >
				Read more details
			</a>
		</div>
	);
};

const Location = () => {
	return (
		<div className="location">
			<h2 className="h2 sb heading">Pick-up Point</h2>
			<div className="store_container">
				<StoreCard
					img={location1}
					name="CasaVibe Yogyakarta"
					description="Lorem ipsum dolor sit amet, consectetur."
					openHour="10.00 - 22.00 WIB"
					link="https://www.google.com/search?q=Malioboro+Mall%2C+Mataram+St+No.31%2C+Suryatmajan%2C+Danurejan%2C+Yogyakarta+City%2C+Special+Region+of+Yogyakarta+55213%2C+Indonesia&oq=Malioboro+Mall%2C+Mataram+St+No.31%2C+Suryatmajan%2C+Danurejan%2C+Yogyakarta+City%2C+Special+Region+of+Yogyakarta+55213%2C+Indonesia&aqs=chrome..69i57.508j0j4&sourceid=chrome&ie=UTF-8#"
				/>
				<StoreCard
					img={location2}
					name="CasaVibe Semarang"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.."
					openHour="Saturday – Sunday & National Holidays: 09.00 - 21.00 WIB"
					link="https://www.google.com/maps/dir//Jalan+Puri+Anjasmoro+Blok+H5+No.+57,+Tawangsari,+Semarang,+Jawa+Tengah,+50144,+Indonesia/@-6.9658019,110.3080364,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e70f4dab319b1ab:0x6d7fe17dc56f0f47!2m2!1d110.3904378!2d-6.965809?entry=ttu"
				/>
				<StoreCard
					img={location3}
					name="CasaVibe Surabaya"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
					openHour="10.00 - 22.00 WIB"
					link="https://www.google.com/maps?s=web&sca_esv=563414948&lqi=ChxmdXJuaXR1cmUgc3RvcmUgaW4gU3VyYWJheWFcSJWj3tr7qoCACFovEAAQARgAGAEYAyIbZnVybml0dXJlIHN0b3JlIGluIHN1cmFiYXlhKgYIAxAAEAGSAQ9mdXJuaXR1cmVfc3RvcmWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkhlVTU1YzNkQlJSQUKqAWIKCC9tLzBjX2p3EAEqEyIPZnVybml0dXJlIHN0b3JlKAAyHhABIhqULoKO07EXpOAHttSL6RR8zO9oGfayeA6rOTIfEAIiG2Z1cm5pdHVyZSBzdG9yZSBpbiBzdXJhYmF5YQ&phdesc=9WxveSYO3QA&vet=12ahUKEwjpha6b25iBAxUJTDABHeFTCxkQ1YkKegQIGxAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=gy&sa=X&geocode=KQFaea4T_NctMXLvcshnIbeS&daddr=Jl.+Mayjen+HR.+Muhammad+No.27-29,+Putat+Gede,+Kec.+Sukomanunggal,+Surabaya,+Jawa+Timur+60189,+Indonesia"
				/>
				<StoreCard
					img={location4}
					name="CasaVibe Madiun"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
					openHour="10.00 - 22.00 WIB"
					link="https://www.google.com/maps/dir//Jl.+Cokroaminoto+No.65,+Kejuron,+Kec.+Taman,+Kota+Madiun,+Jawa+Timur+63133,+Indonesia/@-7.6340151,111.4372397,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e79be5e36cd85c5:0x9899db88edf72a84!2m2!1d111.5195893!2d-7.6340216?entry=ttu"
				/>
				<StoreCard
					img={location5}
					name="CasaVibe Jakarta Selatan"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.."
					openHour="10.00 - 22.00 WIB"
					link="https://www.google.com/maps/dir//Jl.+Kemang+Sel.+Blok+Bersama+No.31,+RT.5%2FRW.4,+Cilandak+Tim.,+Ps.+Minggu,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12560,+Indonesia/@-6.2735851,106.7349422,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69f1ca42972ced:0xaee43e5351850b1!2m2!1d106.8173441!2d-6.2735915?entry=ttu"
				/>
				<StoreCard
					img={location6}
					name="CasaVibe Jakarta Barat"
					description="Lorem ipsum dolor sit amet, consectetur."
					openHour="Saturday – Sunday & National Holidays: 09.00 - 21.00 WIB"
					link="https://www.google.com/maps?s=web&sca_esv=563414948&lqi=CiBmdXJuaXR1cmUgc3RvcmUgaW4gSmFrYXJ0YSBCYXJhdEjGnqC4raqAgAhaOhAAEAEYABgBGAMYBCIgZnVybml0dXJlIHN0b3JlIGluIGpha2FydGEgYmFyYXQqBggDEAAQATICaWSSAQ9mdXJuaXR1cmVfc3RvcmWqAWgKCC9tLzBjX2p3EAEqEyIPZnVybml0dXJlIHN0b3JlKCYyHxABIhu7d7M-D6Xfa_-UCMMSR01D01nWueEF_fICpFQyJBACIiBmdXJuaXR1cmUgc3RvcmUgaW4gamFrYXJ0YSBiYXJhdA&phdesc=AMKbYtBLfmg&vet=12ahUKEwj9p_bV25iBAxWmSTABHdoWBDoQ1YkKegQIIxAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=gy&sa=X&geocode=KSHUKOT792kuMWn41l97JfRh&daddr=Jl.+Lkr.+Luar+Barat+No.11B,+RT.6/RW.8,+Cengkareng+Tim.,+Kecamatan+Cengkareng,+Kota+Jakarta+Barat,+Daerah+Khusus+Ibukota+Jakarta+11730,+Indonesia"
				/>
			</div>
			<div className="support_container">
				<div className="shipping">
					<FaTruckMoving size={56} className="support_icon" />
					<h4 className="h4 sb">Free shipping</h4>
					<p className="p2">When you spend $100+</p>
				</div>
				<div className="vertical_divider"></div>
				<div className="call">
					<IoIosCall size={56} className="support_icon" />
					<h4 className="h4 sb">Free shipping</h4>
					<p className="p2">When you spend $100+</p>
				</div>
				<div className="vertical_divider"></div>
				<div className="email">
					<MdEmail size={56} className="support_icon" />
					<h4 className="h4 sb">Free shipping</h4>
					<p className="p2">When you spend $100+</p>
				</div>
			</div>
		</div>
	);
};

export default Location;
