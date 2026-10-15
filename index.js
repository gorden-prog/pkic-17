const developer = {
    surname: "Горячев",
    name: "Денис",
    patronymic: "Алексеевич",
    occupation: "Веб-разработчик",
    degree: "Среднее профессиональное (если закончу)",
    education: "Университетский колледж информационных технологий",
    qualification: "FullStack-разработчик",
    specialty: "Разработка веб-приложений",
    discipline: ["JavaScript", "React", "Python", "FastAPI", "SQLAlchemy", "Redis"],
    category: "Junior",
    experience: "1 год",
    email: "dev@dev.dev",
    site: "https://classwave.org"
};

document.addEventListener("DOMContentLoaded", () => {
    const skills = developer.discipline
        .map(skill => `<span class="skill">${skill}</span>`)
        .join("");

    const content = `
        <div class="hero-card">
            <div class="profile-side">
                <div class="avatar-wrap">
                    <img src="assets/avatar.png" alt="Аватар" class="avatar">
                </div>

                <div class="profile-caption">
                    <span class="eyebrow">Портфолио · 2026</span>
                    <h1>${developer.name}<br>${developer.surname}</h1>
                    <p class="role">${developer.occupation}</p>
                </div>
            </div>

            <div class="content-side">
                <div class="intro">
                    <p class="kicker">Обо мне</p>
                    <h2>${developer.qualification}</h2>
                    <p class="lead">
                        Специализируюсь на направлении «${developer.specialty}».
                        Изучаю современные веб-технологии и создаю удобные интерфейсы.
                    </p>
                </div>

                <div class="skills-block">
                    <p class="section-label">Ключевые навыки</p>
                    <div class="skills">${skills}</div>
                </div>

                <div class="stats-grid">
                    <article class="mini-card">
                        <span>Образование</span>
                        <strong>${developer.degree}</strong>
                        <small>${developer.education}</small>
                    </article>

                    <article class="mini-card">
                        <span>Специализация</span>
                        <strong>${developer.specialty}</strong>
                        <small>${developer.qualification}</small>
                    </article>

                    <article class="mini-card">
                        <span>Категория</span>
                        <strong>${developer.category}</strong>
                        <small>Текущий уровень</small>
                    </article>

                    <article class="mini-card">
                        <span>Стаж</span>
                        <strong>${developer.experience}</strong>
                        <small>Практический опыт</small>
                    </article>
                </div>

                <div class="contacts">
                    <a class="contact primary" href="mailto:${developer.email}">
                        <span>E-mail</span>
                        <strong>${developer.email}</strong>
                    </a>

                    <a class="contact" href="${developer.site}" target="_blank" rel="noopener noreferrer">
                        <span>Портфолио</span>
                        <strong>Открыть сайт ↗</strong>
                    </a>
                </div>
            </div>
        </div>
    `;

    document.querySelector(".info").innerHTML = content;

    requestAnimationFrame(() => {
        document.body.classList.add("loaded");
    });
});