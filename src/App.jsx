import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhAQEBAQDw8PFRAQEBUPFhUQFQ8PFhYWFhUVFRYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi8lHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLSstLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAcFBv/EAEIQAAEDAgMEBQgIBQQDAQAAAAEAAhEDIQQSUTFBYZFScZKh0QcTFCI0c4GyBUJTYqKz4fAyQ3KxwSRUgqMjM2MG/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACAwT/xAAqEQEBAQABAwIFAwUBAAAAAAAAARECEkFRIWEDIjGh0UKBsRMyYnGRM//aAAwDAQACEQMRAD8A8OQmhKCE0KAhCE1IkKoTAUEwiFcJ5U4tSEoWmVGVODWcJwryohWLUwiFcJgKxazhCshTClpKqZAIJEjTZKSSkbiNEpGiCEKIMaBL4IRCEARonI6P90QqYFCpkdFSepdGJyz6oIFtt771zlVXG76kpVEJIaJCaSkEk0KJL0vyaey1PfP+SmvNF6X5NPZanvn/ACU0J5qmqyphnUnGdRCrKrmNnNAedSkakNVBh0KYqHUqxVdqeafQW1GQ6KhTOhVisdTzTFd3SPNOQbU+aOhWrMI8/UdyKbcQ7pHmuqn9JVB/Mf2it8Zx7uXO8+zIYB/QdyKipg3t2scOsFfQH0vV+0f2is6/0pVdY1HkcSVuz4ed3Ocvi76yPneaOhR5k6Hktzi39N3NU3GP6buZWM4uu8nOaB0PJHmToeS7HYw2h7xa8umTqI2Dgp9MfvqO5lOcR1c/DnqYN4aHljgwmA4gwTpK5iF9Wv8ASb30xSc97qbTmDSbB2q4XtbuJOy+zdx5fBHKTsfh8uX6nPCS1McUoHFYx11nCIV24oEcVHWcJrSq6b77DcLAQNnAKEILalhy4OIj1RJkgSJAtqbrJaMfCmeW9mTgohdBcDa8KTT6uasMrCEoW5p9XMKTT6uasOsklr5tSWIw6hJXlSyoOpXpXk09lqe+f8lNebQvSvJp7LU98/5Kai81TCSoKZNMBAVAJAAVQmAqDVpnUQmAqIQApaZ4T8VQShb4OgajmsBa0uMS45QOsnYtSaxysk2oJFonjOqqm0EgEhovczAtO6/D4qXtgkaKSFAFTCqEw1TWhgB2mNvNaMog/XaOufBRlVtZO+P3sSzV1KLTEVGDtX47FkaA+0Z3+CRYpyqv+lJ7pNMdId6qpRAMZ2nqlLInkQ1vuzNP7w71fmB9o3v8EixSWqP7qNEfaN7/AAUimOkO9VTol2zdtmwC2p4TUtjg4AqzewvLO7F1ID67T1T4Kcn3h3roOEPSZ2gsDT6lWKWXuWT4jfG2FIVBp1VAO1QdS9mhka7FERvnqWjgTtPesy3qVTEl3Hkk83sTHFUQpyrLSSVMqiFKCS9K8mnstT3z/kprzaF6T5NPZanvn/JTRTHm0Kw1KFQCRW7MPO9q2ZhfvN7/AAXM1aNW5jld8utmC++3v8FZwP329/guemV0l2bqFzBAMb4netbPDlerywr4Rzd0g3BFwVjljauyhXgFrhmad2h1B3LZrGOED1DeCTmE6G1lrpl+i67Pq+bCsMPV1rvbgj06Q6iFqaYa3LUe1zGkua1hBJcYBvFhYK6KL8WdnyyRoeaJncee5dmen9n+Iq2upfZ/iKun3PX7VxiNDzVU3EbNZuAbr6lTEUCRFAgREZyZOq2w+LwwHrYeTr5whbnCb/dPv+HG/Fuf2X7fl8vz7tG9lvggYl2jey3wX2vTsL/tf+wrjxmKoE+pQyjTOTdavHP1fyzx+Jbc6L9vy5TWOUOlkzEZRPXsWJxB0b2W+C6G16X2X4itsViMOcuSiWiAHS8mXbyjPf8AlvcudN+zi8+dG9lvgn6QdG9lvgvq4bGYYNAdhsx3nzhErT07C/7b/sK1OH+U+/4c78W7/wCd+35fF89P8TQRwAafgQpc+mBIYc33jLV9t+NwkH/TGfeFfGxdWmQQ2nlNoOYmPhF1jnM7yunw+d5fps/5+XJVrE2tGgAF/gscyZUrja9cki83X8EpHFIBKEHDkcVQePvKIQ4btFLDJHHuUwOPciEoUgY4qbcVUJEIJSL7Z3KSnCRCCmF6R5NfZqnv3/JTXnBC9H8mvs1T37/kprNajz11OL7kmhUyoQtA8HaOUBb9HO2pYFu2mnSewXgnl4L6WD+lCwPhrCHgsMsBgHTityRx58uXaPnBqoNK7Tj+Dey3wU+nf09lvgtZx8s9XLw4y2E2uK6nY2dw7LfBSMYBuHZb4KyeVvLwyBK1fSIAJIg3HFX6f/T8Gt8EvTzw7LfBa+Xyz83hzlvEJ5OI71t6dwHZb4Jn6Q4Dss8EfKfm8MfSDlLPqlwebD+IAgX27CbbFhmTc8HXuUFw4rDpIeZN8RadyvC4w03Nc0NOW8PAeDaPWBsVlXqlxJMXJMCwE3sNwRpy6jMnmUFKVa3jYVNyeZYyu76LfTFRpqsNSmP4mg5cwjXcmetxjn8stxyGokKm20/4TrkFxgQ2dg2gLGUVqTY6KFIvIaIk7JIaNk7TYLMtSa9b08W5ogOICp7q72ZtZwV1qOUkS10RdskG02stBj39IqhjHn6xTkYt5OQ9SUrtL2vEPs4bHATPA+KRwJIlhzjfFiOsK6fB653cZPBBEWIXW3APP1T8dyr0Vg/mcmlXTV/U4uMdSbhwhdgoU/tD2f1Wj2UyAMwtNwy5nUzfZbrKumj+pHzXN3xtWZ6l3Pos6Z7P6rI02dI8kXi1ObkPUvRvJt7NV9+78umvwT2M3OPG2/h3L0DyctHo1WDP/mdu/wDnTWLHTjy15qtKY2Ts3rOVo1xVFWhF7bNyoFQHniqFQ6laYxYKFPnTqU6dUzeYSMqoShaPrSSRIG4bYTqO2ZXONhmkRDryBe42X7k+g9UU2yQJAne6wHWVcgAEAlxDswcBAM2y3nZrvWec6lHnDqVLKgqmkQZBzWymYA1kRebbxHFAed8nbvi+4oDnHZJ6roKCk5tpv+uiqTtJgKmSbAuJOwAEk79gUdZOaRYpK31ZNiVPnDqUGaRWmGpFzgAHGbQwS5w2kAb9ncsy88dfggkqV3G0sJsCG8bnZ8EZgNgErDj+yiU6ukypIXRhSAXAwJa5t4IkiPh1o9FJ2Fh/5C6stHVJfVjTAm5ga7U4GqTmEW3hUaZG0Rpx3WQTDRqtCRAFuu9+u6yAVBqRWrGjpdy2c4QACLTugmdSowjAXDMYEiTtgLfH0mtc4McXtk5XEZS4axuWpPTXHlfmxFAiRJMSJy2Mb44wioW3jZeJ2gbviudIoa6fXVOjVIEDfPWoSJsRGl9ENYH9ayPWmVJRW5BMb+C9D8m/s1X37vy6a85K9G8m3s1X3zvy6axW+LzkFdFKk4guEQ2M3CdixDhoFsypwHetRnlvYCdQmCdQmHjojvVh46I7/FLLO+oVCdQrzDojv8VbXDot7/FQS0HVqvMdW/v4LenicocA1sOgO23AWbqg6De/xTrHr4ZydW/v4J+tqCtqGIa0yabHcDPitz9IM+wpfi8VuZe7PK2X04/w+aXu/YTDnC8hum4ratiZM5GgHYAXeKl9QbcgI1Mi8XG1Z/duX2cz3fH97kg4jcOS6XVG2hrDrtseaupjGml5sUmB2YOzicwERl27FZ7nqvaOEv4DkqOIOTJDYzZpgZpgCM22LbFBUwst5CVBELV9RkNDWFrh/EcxOa2m66DayP8AbuULrxWNdUDGuIIpNyMhrWw2wuQL7BcrlhSm56qpztG66ouMk7zdOk4tmLSCDxBShI7txinb4PWATzTOKOjey3wUUGAn1jlF7xPctaoYWl05Xl1mtHqhvAkrUtc70y/RIxR0b2W+CYxR0b2W+CwAGp5KoGp5K2npnh30XPymoGAsaQHHIIBdMAmLTB5KTjz0afZC5m1rRJgqAATcmOpXVWOid46jjCdjGfBoSGLd0G9kLJrGbPOETwt/dTVa0TFQujhY96fU5x+mfZqcS7oN7ISOKd0G9kLmn7xR/wAija10Rs6u7oN7IXM5pO7uVT94oDuJRWpM+iHUjoV6F5Nh/pqvv3fl01+HxGLzNa2wyTcCCZ1O9fufJv7NV9+78ums85OzXw7b9XnAWrnzeANmwQFIYOkO9WKY6Q70SK4AVtRpl1mgk7bCbKG0h0x3+C6aTAP5gHa8E5WbVjBv6DuRVtwL+g7kVbI+2H4vBbNA+3H4vBZ6efs53kw9Cf0Hcip9Cf0HciuuB9uPx+CTmj/cNG3p/wCAjp5+zPW43YGp0H9krGth3Nu5rmjZJBAnRW7FO6R5lZPrOdaSeEk3VOru6TWRRc2kwLxe2pVuogbXtB3i5hLIB/MHf4Lph2JYASJMC19BqniabWucGvFRoJDXAFoeNxg3E6FHm29Mcj4KqdFpIBqNAJAJg27k4t7sEQtsZRDHua14qNGxw2FdNDA5qb6mZgyZfVJhzp6I3wmcbuC/E4yS+XAVJVuCkMJvFht4LLpqZTBShEILu+jcBUruyUml7oLoGgEkrSpgH2im4QBO+TvK5MPXcwy0kHUWVOqk6rpOnHGzn1fX0beg1Og7kk7BVBfI7ksBUKtlcgggmRcK+U/Ozy/52qSV9GtiKdRxcaeSdoYbDiAQsXYQHZUZHGR/hHT4E5+ZjjhWF0imxv8AEc53BhjmSEs9PoO7X6K6T1eI5kiu2kKbptljpPieq11TqNPh2/0Rcnddfs+cmus02cO1+iPNs4dr9EbPJ6vZxlSSut7GcO1+ixIb+z+iNnlqVgSvRvJt7NV9+78umvPSG/s/ovQ/JvHo1X37vy6azW+LzbPwTD+CzQrTjcVOC0bW4DvXKCqBTovF1tr/AHR3rQYgdEd64g5PMrWeiO9tUGx9XQ371tWLC1obDXCc7i4uD9IbHqr5YcqOwG157laxeHq6TlbckO0AnvUekR/C0NJ33JXNmRKda6fKiUiVMrRpEGZm0QbDWRF+5DSEwkhSaMErcPIEarnY6Fvi8U6q4veS5xiSYvAAGzgAnWLLazgap3gwbb1CsG8iySiUo710vIJJDABpJMKCPupwTk2wGE86S3O1kAulxgGN3Wud9lbHxu71m5w0Hem5gm7vZIKClnGifnOCy2AVrT3SYHOykVBog1BolmnViTBkSYm0jdbcs0y8aKc40QZDlSSjPwSL+Cjh0wCbuDRe8Eq3Mb0xyKxzcFRy5Zk5tItHWjVhlg6Q5FQQOkoJUko1rGmUdJejeTYf6arf+e/8umvNZXpPk09lqe/f8lNZpjzVCRQoqTClOVJQVEKAU8yQuEQpDhonmGiQcIhGYaJ5hopDKjKiRomG8QkHl6kZOpMM4jmiRpKQptKd4A4p+a4hZufKUq9Flbil95qptMb3Bc4KoK1my+X1MHhG1M2aoxmVpcJn1iPqjiV8+q28KiHNG8Ts4hYOctXlLGOHG7bpLZ+TI2M3nJdmmMuXdG+VgSlmWHXNBSlIlKUNLDkNkkAXJsI3lZyiVasWSlKklJWnFEpEpSglCEpJIQTSQkpGvSfJp7LU98/5Ka81XpXk09lqe+f8lNReaoSQpGhKU1A0JIlSUiVMolSVKcqZRKUtMFRKeZQXKJUZky7inVjVjheRNjF4g7j+/images/bg.png/images/bg.pngJ4ozcVDHfgm0zm84XN9U5comXbgeCzBA3lcwfxVZhqFrfRjo9d12YjEl4aHOcQwZWzfK2SYGgknmuUxqVGcahSXDULOnjxz6NLalSY1KjNxSlWtYpwSSzIzBBCEiUSpBCJSlBMJIlEqQSRKJUghJCiZXpXk09lqe+f8lNeaL0vyaey1PfP+SmhPpoQhKCEIUjQhCEEIQpBCEKQQhCUE0IUghCFABUhCkSSEKQ/images/bg.pngQhCkSEIUQhCFIIQhCCEIUgkhCkEIQlBfo/8A83/63f1n5WoQhP/Z')] bg-yellow-200 bg-x-full bg-no-repeat w-screen overflow-hidden">
      <Navbar className={"fixed top-0"} />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
