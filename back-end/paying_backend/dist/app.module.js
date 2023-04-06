"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const francchi_module_1 = require("./francchi/francchi.module");
const order_module_1 = require("./order/order.module");
const product_module_1 = require("./product/product.module");
const order_item_module_1 = require("./order-item/order-item.module");
const option_item_module_1 = require("./option-item/option-item.module");
const workingdate_module_1 = require("./workingdate/workingdate.module");
const product_option_module_1 = require("./product-option/product-option.module");
const user_entity_1 = require("./entities/user.entity");
const francchi_entity_1 = require("./entities/francchi.entity");
const workingdate_entity_1 = require("./entities/workingdate.entity");
const product_entity_1 = require("./entities/product.entity");
const order_entity_1 = require("./entities/order.entity");
const order_item_entity_1 = require("./entities/order-item.entity");
const option_item_entity_1 = require("./entities/option-item.entity");
const product_option_entity_1 = require("./entities/product-option.entity");
const typeorm_2 = require("typeorm");
const alarm_module_1 = require("./chatBackEnd/alarm.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            alarm_module_1.ChatBackEndModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '',
                database: 'testDB',
                entities: [
                    user_entity_1.User,
                    francchi_entity_1.Francchi,
                    product_entity_1.Product,
                    order_entity_1.Order,
                    order_item_entity_1.OrderItem,
                    option_item_entity_1.OptionItem,
                    workingdate_entity_1.WorkingDate,
                    product_option_entity_1.ProductOption,
                ],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            francchi_module_1.FrancchiModule,
            product_module_1.ProductModule,
            order_module_1.OrderModule,
            order_item_module_1.OrderItemModule,
            option_item_module_1.OptionItemModule,
            workingdate_module_1.WorkingdateModule,
            product_option_module_1.ProductOptionModule,
        ],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map