import {model, models, Schema} from "mongoose";
import moment from "moment";

const UserSchema = new Schema({
	profile: {
		image: {
			type: Object,
		},
		name: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
	},
	status: {
		type: String,
		default: "pending",
		enum: ["active", "inactive", "deleted", "banned", "pending", "suspended" ],
		required: true,
	},
	emails: {
		type: [String],
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	roles: {
		type: [String],
		default: ["user"],
		required: true,
	},
	subscriptions: {
		type: [Object],
	},
	createAt: {
		type: Number,
		default: moment().valueOf(),
	},
	updateAt: {
		type: Number,
		default: moment().valueOf(),
	}
})

const Users = models.Users || model("Users", UserSchema);

export default Users;
