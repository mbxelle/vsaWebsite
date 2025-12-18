import { useTranslation } from "react-i18next";

function MemberCard({ name, role, imgSrc }) {
  return (
    <div className="member-card">
      <img src={imgSrc} alt={name} width="150" height="200" loading="lazy" />
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}

export default function Execs() {
  const { t } = useTranslation();

  const execsData = [
    {
      name: "Teresa Tran",
      role: t("execs.roles.president"),
      imgSrc: "/execs/TERESA.JPG",
    },
    {
      name: "Chau Nguyen",
      role: t("execs.roles.vp"),
      imgSrc: "/execs/CHAU.jpg",
    },
    {
      name: "Sodana Ung",
      role: t("execs.roles.df"),
      imgSrc: "/execs/SODANA.jpeg",
    },
    {
      name: "Ninh Dang",
      role: t("execs.roles.cr"),
      imgSrc: "/execs/NINH.jpg",
    },
    {
      name: "Trang Pham",
      role: t("execs.roles.ca"),
      imgSrc: "/execs/TRANG.jpg",
    },

    {
      name: "Jessica Hang",
      role: t("execs.roles.coVpEvents"),
      imgSrc: "/execs/JESSICA.jpg",
    },
    {
      name: "Stephen Nguyen",
      role: t("execs.roles.coVpEvents"),
      imgSrc: "/execs/STEPHEN.jpg",
    },
        {
      name: "Britney Phung",
      role: t("execs.roles.vpm"),
      imgSrc: "/execs/BRITNEY.JPG",
    },
        {
      name: "Alex Kieu",
      role: t("execs.roles.designer"),
      imgSrc: "/execs/ALEX.jpg",
    },
        {
      name: "Bao Le",
      role: t("execs.roles.ccl"),
      imgSrc: "/execs/BAO.JPG",
    },
        {
      name: "Ivy Vu",
      role: t("execs.roles.ve"),
      imgSrc: "/execs/IVY.jpg",
    },
        {
      name: "Michelle Bui",
      role: t("execs.roles.wd"),
      imgSrc: "/execs/MICHELLE.JPG",
    },
            {
      name: "Presly Trinh",
      role: t("execs.roles.Mascot"),
      imgSrc: "/execs/PRESLEY.jpg",
    },
  ];

  return (
    <section className="execs">
      <h1 id="anchor3">{t("execs.title")}</h1>
      {execsData.map((exec) => (
        <MemberCard
          key={exec.name}
          name={exec.name}
          role={exec.role}
          imgSrc={exec.imgSrc}
        />
      ))}
    </section>
  );
}