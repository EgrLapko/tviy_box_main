import React from "react";
import Image from "next/image";

import { routes } from "utils/routing";
import LinkComponent from "components/common/LinkComponent";

const links = [
  {
    id: 1,
    title: "Каталог боксів",
    route: routes.catalogue(),
  },
  {
    id: 2,
    title: "Конструктор",
    route: routes.constructor(),
  },
  {
    id: 3,
    title: "Доставка і оплата",
    route: routes.deliveryAndPayments(),
  },
  {
    id: 4,
    title: "Контакти",
    route: routes.contacts(),
  },
  {
    id: 5,
    title: "FAQ",
    route: routes.faq(),
  },
  {
    id: 6,
    title: "Корпоративним клієнтам",
    route: routes.corporateClients(),
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo-wrapper">
          <LinkComponent {...routes.home()}>
            <Image
              className="header-logo"
              src="/static/svg/logo-tb.svg"
              width={62}
              height={32}
              alt="logo"
            />
          </LinkComponent>
        </div>
        <div className="header-links">
          {links.map((link) => {
            return (
              <div key={link.id} className="header-link">
                <LinkComponent className="link" {...link.route}>
                  {link.title}
                </LinkComponent>
              </div>
            );
          })}
        </div>
      </div>
      <div className="header-right">
        <div className="header-cart-button">
          <button className="button">
            <span style={{ marginRight: 8 }}>
              <Image
                src="/static/svg/cart-black.svg"
                width={15}
                height={15}
                alt="cart-ico"
              />
            </span>
            Кошик
          </button>
        </div>
        <div>
          <button className="button color-primary">Створити свій бокс</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
