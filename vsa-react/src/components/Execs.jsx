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
      imgSrc: "/execs/chau.png",
    },
    {
      name: "Britney",
      role: t("execs.roles.designer"),
      imgSrc: "/execs/BRITNEY.JPG",
    },
    
    {
      name: "Jessica",
      role: t("execs.roles.Vp"),
      imgSrc: "/execs/JESSICA.JPG",
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