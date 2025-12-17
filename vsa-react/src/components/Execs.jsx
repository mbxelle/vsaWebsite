const execsData = [
  {
    name: "Teresa",
    role: "President",
    imgSrc: "/execs/teresa.png", // Assuming images are in public/execs/
  },
  {
    name: "Chau Nguyen",
    role: "Vice President",
    imgSrc: "/execs/chau.png",
  },
  {
    name: "Britney",
    role: "Graphic Designer",
    imgSrc: "/execs/britney.png",
  },
  // Add other exec members here
];

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
  return (
    <section className="execs">
      <h1 id="anchor3">MEET THE TEAM</h1>
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