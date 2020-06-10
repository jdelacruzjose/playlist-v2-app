import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jose De la Cruz",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhAVFRUWFxUXFRUWFRUVFRUWFRUWFhUWFhcYHSggGBolHRUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICEtLS0rLystKy0tKystLS0vLystLS0tLS0tLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQQFBgMCBwj/xABDEAABAwIEAwQHBAcHBQEAAAABAAIRAwQFEiExQVFxBmGBkRMiMqGxwfAUQnLRByNSYpKy8RUzU3OCouE1Y7PC4jT/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAArEQACAgEDAwIFBQEAAAAAAAAAAQIRAxIhMQRBURMiMmFxkaEUgbHR8CP/2gAMAwEAAhEDEQA/APnQCaYanCsSeYThekBAACEihACE0iUAiU2gkwBJPBCl4SYrUzye34hQ3Ssvjjqkk+7F/Ztb/Bf/AAlH9mVv8Gp/CV+hn1KWXNmY2B6xJAAloC+P/pC/SYXE21g4ZW6OuABmdplLafDL+9x4LmpSfg1Tx4YrfV91/Rhb68FIlpBzjQt5HkVU1ruo/SdOQ0XllDNxnf671Kp2v1+SlyMum+CGKBT9ENpVzSw4ugNa4zx314jRSqvZ+oNmgt669+i5+qkXWGT7GcFM8J+PFdqV69vGR36qxrYYaejyRvGm/nuoFSgeAJ+vgrqafBRwaJ9vftdodD7vNS1n3Uz1Xe2vCzQ6hXUitF0lK8UqocJBldAFYgSCUykgBJNIoARKEIBFCEkAFCEIAQkhAdUIQgBCYCSAEJpQgBC9NMEHlqte6tmrGk0U2zqCWN/ZDo2XXHi127qlZDe6XkxwCbTBkb8Fqb5pYWtcKbw/SA1oI1jhsoXaCv8AZbfLTLSfSvptOVpcQQDMkcJhJY0q3VNN/YndXtwZjFsYrPml6V5B9r1jr3KuoWZcYA9ymYXYz6zlf0LcDYLBPKo7I1wxyybzZFwrBgNXHU8AtFRs2j7onbZebCkrqhbSsU5uTN2PFGKIlG32AEeClNtyrGlb6aQuho6aKlHW0U7qE7iVX3GHM4sHUaLT/ZlGvbXRLaIpM+f4lgI+55cegKz11YubuCOo3X0SvS1US4oA6EBaIZ2uTLk6aL4Pn9CsWGR4hXdGqHAELjjNiGOgDTcaKFh9bK7Kdj8Vuxz1I8+cHF0W0oSXpdCgkkJIBpFCEAkJoQChEIQgEhCaA6ITCIQkRKA2TAEoXW1qlj2vBgtcCPAoBfZqn+G7+E/kk6i4btcOoIX0qs9oZPpnZp1GbYr1buYHZK9RwPImZ8Ft/SxSVzVvheTP60ndRdLk+XrSOtQ6u30mjS1k8PuBXPafB7Z7C6gwtqDXQQ08wRzUbBrN9al6Wo+DJEejnRkCSZ+oXLFqhOWNxdtdtn9UdrjoWRvb7/syJ/Z4GrNHB0CHZpHPuWR7QuLrktn2AM34i0F3yWxxO/qUK4pEUssth4p7tP3olY67bNzX1zRVqCYicr3NBjwXHLnjPHFJPbu3b+h19Nqbt89kqRPtKcNACsqLFCtdgrKkwnZeTPk9KHBYWHRXdsFXYdRAEq6sS0nUj61+a40d01R0tqBMnXou1S2IU+1pADTXj57rrUGwhW0ldRTnRRbmVdVqAbJJVa8tdMEaactVDTLKSM9csUOoxXN3bctVVOdB18URDZRYzbzHfp+Syd5QLXTtH9VvL1ocO4LL4vS5rXhkYuoh3PdGpmaDzEr2omGH1I5Ej681KW5GAEITQHlCaUIBIQhAeqFBz3BjRLnEADmTsF2xHDqtB5p1mFjxEtMSJ22XvB//ANFH/Np/zhXX6Sv+o3HVn/jagMwheo7kIDokUQhAACChEIDa1xJceeU/7QpfbUxVtnNGpLR1zBuihMreoPwsP+0KTiuJUqjqTySTTAytgxmDYlxPIrb1WDJmjhcFdfi4xHT5Y4/VUnzx+0mTqdzPqmJLonoYXC5f6OKTf2ZPeXEkqsoV5IPCfMk6LpePL6tct2p6+DYatvs/U238Md/q3t/vmZNEv0+mvildfJL/AH2InaulmpUaw4Sx3UbfBY5v99U/G4+ZJ+a3Vb9ZaV2cWxUb81hSf1ru+Pe0FeDnjpnOHhuvo91/J6iepQn5S+62f8E418gmJ7uak2TLhwkMJJ4SQB3bR4LzZ2oe4EiQCtNbXIaYJAA3PJYpSSNUYOXcrrXDrjd5IIMgToPLRXdmS0nM4STr7pHdzU+njVFjcz9srnD2RIbE+0RzCH1ra4HqtyO4HSJjQSDCo3J7llGKdGhw27ZlA+vEqWXtGsLEWNwabywnYwtFcXgLAJVNR10eD1ieINLS1Y7EMPNQywnwJ/orinSD3S4yGiTquNz2kpUNIEAcTlH5lWg2ys4xRUUMIuxJztj97MTp0Kr76zq03B3PeJIPUcCtAe11Cp7LqZPIPg8Ndu9cnXDKunu2Pu3UuTT3RSMYtbMo3OloVHigmVqbyyyN8eCzWIDUhWg9yMi23KzDRo4fvfIKaolsIc4d/wAlKXox4PMezGkUIUkAEkIQCQhJASLGsGVGPIJDXNcQNzlIPyVv2gxejdXb7h1OoGvj1JAOjQ3fwVAhAXNnilFjA00SSJkyNZJKFTQmgs6ITQQhISkEIhAXhuSGtH/aaV3xSkylTpvaJLmscc0kesJKqqztGf5ceRKtsZg2tA8fRsHkSFbL1E9EIptI7Y8cbm63qyNh97Ur1qYdGVhzZWiGgNGaTHRWGBkvFYwTmhp4+1mKrLV5bbO9E+DM1eBy+y1veDJKLOjXbRdXZUyU82UnMRJ6DqpTSwySdW1+Hf5KRt5E2rpMk4ReAPLXaB7HsM7SBxWWrNip5DyACn12lstcdQQZGuhG4XXFbXLBPtNjUDRzTq13Qgys/UT1ZNXk7Y1/z0+CxwhhDCQN1BZSr1ahYIY3iXbkHePzVlhJloC0FCxZxC89yps2qGpIydPsc91RxD2Nadg4l7miQ7RxG4I3EHVaGlZehpsbT9G1zGZS9oIz66ZwCQ7ltKtmWzB92e4lcr4iPkNlLzNqguninaKik4uqF3n+S1FCmC3wWdsGS6AtZb04auTO0TO1XOY8tHHTafcuLrGWVabi0+lbldUyEvImYaSfVE8NlZYnS1niCpVuCW6t+EFWjNx4KzxqXJjB2Po5ml1wX5dACJgAmBB4a7J0cFdSfNKo4s5PEj/Stg4CfZA8F0NNpGwlTLK33KxwxXCKGs2WQSsZiR9fxWyxNuUmFlN6zZGk+GgJU4/JXKux0ZggaPSVCZfGVg37h1VbVbDiORIW9sLUPqsfUGwcYOwAiFg678znO5knzMrX00pSuzJ1UIxqkeEQgFAWoxghNJAeUQmhAJCChAKE0kIDshMlKUJBIJylKEFjd0SG0oBJNOTp+04wtEbP0uG5oh1Jp309lxPHuKyP2h3BzvModXcRBe6OUmPJc8kXJJeHZ3x5VC9rtUTKFemKBp5iHOeC45ZGVo9UeZlS6uLMFn9laCTnLi6I4yFSpKXBPnzZSORx48USrp9N2UlxBDGg+rxA6qe+l6e2NWT+qphgP7WQ8fNUNdumit8CxAiyfRGvrOzDxnXwXLMqSo7YHcnfgkYM/QLWWLXOWHwetBC+hYQ8QCsORe434pe0m21hO/vUHtCxrQGN9pxjoOKtHX42WexmsXOD27tOgPFRSLNskW9l6IB57lpaFWl6PNMmPBfObup6U/ra1RoGzWPgafh1Pmp9Ck7LDbiGxMGXOHd3mVfSU9Q0zmMqzqFww+uabjT3aNQN9zwWUqsYx8sqvzke0X1CCfwzHgrjBLxuYl7pcQO4R9FVaospajUMYypsot3ZgaqPcFw9amR0Ok9DzTZiYe0g6OG4O4VXTLJtGbxgws/hLQbpkgQHEmdtASrvHqsz3LNW7oqtPNw9+ivBbHLI9zcdtqwt7c1A8EkFkjhnBHzXzKlUkaLRfpGvnOosYdi9p06EjyhZixb6q2dKvaYurfvrwSUBATatJlBCEIBFBThJACSaSAEIQgPRclmSlCsRY5QCkhAewU1zlOVFCz2mCvMoQk9EKz7JYU6oLlwfDWhgc2B60h8alwgSAOO/dBq2lV1a9qUXl1NxaSIdBIDmyDDo3EgHwVJq1RaDp2WuHTwWwwm7Pop8uqx2A1ZIPNaS0cG5mcnBw6HX5rBkW56OJ0iZcYoKQjVzuPLw7lVOvKtUwGkidF1xS3cCXwSNxB1Pco+GenryKVJxaIkgEBsmJJ8/Iood0hLI7puiXbWkH16gBnaZnSPuq0t7MDaqO6QQRGsDTXcq1tewFzBJexpa4CBLpBj1gdNNduq01PsCA5odcOLdZhjQfDdWUWVc4I+fXVKnzJ5+qI8AT9SoRoUxqyrDuAOmvw/qvpF5+j1pzRcPG2UEN2jXNA1Wb7S9hqdIuy3YpsAaAakOJdBL9BHIR+JRoY9SDWxmWX9RuhJGvee6NOCtqFyXAP4tOU97XGIPPms/bYSTUdlqufTaYY4tyZhzyyYWiLMrQ2dTBPRuqrNIvDVyVt7TLm1HHnA8P6qkpR6WnO2ds9JWlv3AUWjnJ/iM/NYfGa5DSQYPAjeZhIK3QyOlZbfpLubd9S2bbuJIY41QQQQ4uhszxgO24EKloNgBU1pLnyTJO5OpV60aLfBUjzZu3YITSVyo0ICAgBJMpIASKcpIAQhCECTQkVYgaJSQgGhJAQDXoFeUwhJ6VdijdFYlRryhmCq+CUc8HrQB3Faunc+y/uh3RYizdkcWniru1uI0WPJHc24p7UbajXa8R4BV7bipa1C6k4s11jY9RsdyqyyvNQrq4IqAHSfiuK9rNG0kaXD+1NzUb/fEbAgBo0HfEgrQ08beQC59wTrEOptG20tZ8l8uoXYpOOYOaOMaj81bUu19AAA1XCP3Xceq6pyJfo1ukafEruoQ4vqPa06FpqOM8NZ35bBZLFLo1H7kzuSZOmgSuu0dKqIZ6R/cGnjx1RQpknM9uUaQJ1PVc5Nrk6a41USdZU2sZPcq26ui4xxdp0au97d+qRwVAbnd3P4cFRKykpJEnFr6dOWgWPx2toBz+X9QrO5r8/rj81QYgS5/gIWjFCmZM07QYazVXYUGwtsolTlrRkYJIQrEDQhCgCQmkgBJMpIAQkmgEhCFYqCaSEA0JIlANCEID3KTkwEKCSivxDlMpViIDtORXPE6as7WiH02yJ0HwWfI6NGJWeKNwdD9d60NjWDm5mkcJCytai6mYJlvNSsPvMpidCOPl4LlKNrY6xm4umbinSB9oSCuwwWi4Zss9COvhv71RYfcg6kEzyJA4eK09G4zsytdx4zziNOi400aFJSF9ibTGjQ3qfqVCvK2g1mZiO5e7y+ho9bPExHAjQaxJVJeXOcesNjoNwPoJpvca62I2J3ZiNuffM6ddPeq2tdADReb2rJmdPnzXK3oGo6TsuqSSODbb2FRpGoZPs/Fda+GCo+QYcAAP2T3dyuqNrDV4oe04DeAQe8SP/b3KjyNbou8aqmU4pluhEEIKnn15a4jMD6p+R7lBe0gwRBG4WvFlU18zHkxuDEhCAupzBCZQhIkJpIQIpJpFACEk0AJICFYqNASRKAaEIQAhCEB6C9BeU1BY5XVDPoBJ2HeVNsKBYMjt26HwUrDaMD0h6M68T8lwEh7p3nj0WPNkTlpRrwwpamdLy0zN5rP16JZPL4LW0HSuF7Yg6gdf+QucZ0dp49W5n7a9c0Rvz13VlSxh20SBoBMN8ddVGdgxd7B8DqPDiE2YBcxpTaRzFQD4wutxZw0ziSal+9/ARygdFwrXPAmd9F6o9nbt33GjrUGkdzQrC37Kka1akx91ggeJ3PuVZOKLxjORS0abqh7ttNugWlw/DoAJEKyw/D2N9kRHAd3Mrvcs05LjKd8GiGKuSuuHgaBQ7LSs2dQZHXSfkpdVvBR2tio095/lKp2Jmipu3/rDB481LDW1mjg8CAeDo4H81X3O5RQqxxUwbjujnOKlsxVGFpIIgjcLyrqncMqty1WTGzho4eKrLq2yHm0+y7n15FbseZT27mGeJx3OCJQhdigISlEoAShNIoQCEk0AJShCsQMoSQEA0JFCEDQEICEnpdbWiXuDRx9w4lcmNJMASTsArmlQ9A06y9wg/u9w5rjlyKC+Z0xw1Mk2b2mpkjQAABR8RoxWPeAfeR8lDtKrs096sr4yaZ4lrh/C7/6XnR+I9CtkcqYgqYGyOq5hkqRQpqWdEQqAhy0NhVH0VU1qMFSbYHn7lFk0XbqwaNGjXrKr7l5O+n1yQS493TSUhTUMsjrbiAuFfVTqdHT6+K8uYAoJKw0earbls1GDmT/ACmVe1xCoy79cTOzXR5an3qV3KzWxQYgIceq40yvdzqSVyYpjwcpE23d3qxwu6bnDKjQ5h9oESOo5KnY+Cu0kQVLK0bS67K0XiWAtnYgz7iqC/7L1qerYeO7Q+S13Z2+FWnHER1jh8CrR7V0jnmissEWfI6tItMOaQeRELmvq11ZMeIe0OHeAVQ33ZKk7VhLDy9pvkfzWiPUp8meXTyXBh0Sru87MV2eyA8d2/kVU17Z7NHMc3qCF2U0+GcXFrlHFCJTViokIQrEAEIQgBCESgBMBdrO0fVOVjZ58h1K1FhgjKIzv9Yjy8FzyZYw5LwxuXBX4PbZBnc2XEaA/db+Z+HVcMQdPFTLisfW0iSSVT13yvNnJyds2wio7HvD3HMVY4s2DQ5EVPixV+GkZvgrrF6YLaJHDNr1LVSL9x2atHmhsu7HJUKWiVQQrM6JFgaYcJhdbah0UexqaQptMqpc7/ZtNwhtAdx8F7DkGUIHV2UYuUipqorobJKMlEW+fDSSqFlGo/OWMLjHATpIPyUy/uC6Tw+v+VZ9kWCHHjm90f8AKslsTNVEwtZpBggg8QdDPRcgvrmJ4BSuWw9sOjR40cPzHcvnGPdn6tq71hLZ9V42PXkVCM7RWBe5XM7IBVippeyuIZKjWk6EkcPvd/UBb8jivkNJ5BB5L6hgV/6ai186xDhycND8j4qpZExzQvLmrpKC1AcKjF4LJ0IBHepBb9QvBplTYogHD6XGlT/gahT8v1Cam2RpXg+PoQheseUASQhQAQmhAbrs8wCkyABO+m6k4t7Hj+SELzMvLPRx8IzeI7FVCaFRcFkd8M9tX19/d0v9f8oQhUXxHfHyibaDRcLpCFZlkebE6q2ZuhCgkkjZD0IRA6EKlxc+yJ4/JCEZaHJU3Pst6j4rQdkR6r/xfJqEKy4JzcGsZxUTGqYdQeHNBGQmCARMFNCgzHxkoCEKyKCnVbn9Hjjlq68W/ByEKrJRr6g08vivDOP1yQhCw3/Xkh25QhAcHnVCEKSD/9k=",
      playlist: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;