"use client";

import { useEffect } from "react";
import useStore from "../store";

export const Dashboard = () => {
  const currentPage = useStore((state) => state.currentPage);
  useEffect(() => {}, [currentPage]);
  return (
    <div className={`page ${currentPage === "dashboard" ? "show" : ""}`}>
      <h1>Dashboard</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies
      erat tortor, eu finibus nisi porttitor in. Nullam maximus sapien vel
      faucibus porttitor. Praesent luctus finibus tortor. Aliquam sagittis lorem
      at ligula maximus eleifend. Morbi dictum odio at magna pharetra eleifend.
      Nunc urna libero, placerat non finibus ac, fermentum at purus. Suspendisse
      tellus nunc, cursus in velit nec, porttitor porta elit. Vestibulum nec
      congue mauris. Suspendisse leo nunc, finibus a turpis porttitor, gravida
      sagittis leo. Mauris pellentesque est nec lectus consectetur congue non at
      tellus. Cras a ex interdum, varius quam at, imperdiet ex. Nulla pharetra
      porttitor libero id blandit. Pellentesque ac posuere sem, ultrices
      elementum quam. Morbi ut arcu et nisl tempus pharetra. Nunc pharetra risus
      dui, quis scelerisque orci sollicitudin quis. Vestibulum sodales
      condimentum nunc, at facilisis arcu lobortis non. Donec consectetur urna
      enim, sed interdum magna luctus non. Praesent euismod massa quam. Aenean a
      suscipit massa. Nunc ac libero dictum, porta quam eget, faucibus sem.
      Curabitur blandit, massa et aliquet volutpat, urna augue pretium lorem, et
      fermentum ex ipsum in libero. Quisque ut elementum nulla. Donec vitae
      sapien sodales, varius dolor et, elementum diam. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
      finibus lectus porta dui consectetur iaculis. Sed tellus tellus, eleifend
      in luctus laoreet, elementum eget ante. Mauris posuere, felis eget iaculis
      luctus, erat purus lobortis nulla, eget rhoncus libero erat ut leo.
      Aliquam tempor sem tincidunt dui cursus, pellentesque maximus dui
      tristique. Duis volutpat facilisis dolor, sodales ornare est scelerisque
      vel. Proin pellentesque scelerisque sem, at sagittis quam dapibus at. Duis
      aliquet vestibulum nulla nec luctus. Duis mollis, tellus eu faucibus
      tempor, lacus leo semper diam, a aliquam ante nisi nec risus. Pellentesque
      eget convallis odio. Quisque vel nulla pulvinar arcu pretium ultrices. Ut
      rhoncus lectus eu sem bibendum, vel imperdiet ligula ultricies. Maecenas
      at commodo lectus. Proin nulla mi, ornare quis ante a, ornare egestas
      arcu. Aenean a faucibus enim, non consequat eros. Quisque tristique
      imperdiet lacus, eget lacinia nisi fringilla porttitor. Nam id odio dolor.
      Praesent nibh enim, sollicitudin a tincidunt in, consequat dignissim
      justo. Nunc ac varius est, et gravida ligula. Aenean eget orci risus. Cras
      pretium sem eu quam vestibulum euismod. Suspendisse sed fringilla nunc.
      Aenean eleifend tellus eu pellentesque molestie. Vivamus eu accumsan
      massa. Mauris euismod pellentesque dolor, quis tempus leo pretium eget.
      Aliquam luctus dui magna, faucibus eleifend arcu vehicula sed.
      </p>
    </div>
  );
};

export default Dashboard;
