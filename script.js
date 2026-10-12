document.addEventListener('DOMContentLoaded', () => {
    const transition = document.querySelector('.page-transition');

    if (transition) {
        const links = document.querySelectorAll('a[href]');

        const startTransition = (event) => {
            const link = event.currentTarget;
            const targetUrl = link.getAttribute('href');

            if (!targetUrl || targetUrl.startsWith('#')) return;
            if (targetUrl.startsWith('mailto:') || targetUrl.startsWith('tel:')) return;

            event.preventDefault();

            document.body.classList.add('is-transitioning');
            transition.classList.add('is-visible');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 220);
        };

        links.forEach((link) => {
            link.addEventListener('click', startTransition);
        });

        window.addEventListener('pageshow', () => {
            document.body.classList.remove('is-transitioning');
            transition.classList.remove('is-visible');
        });
    }

    const projectPage = document.querySelector('.project-page[data-project]');

    if (projectPage) {
        const projects = {
            emancipa: {
                title: 'Emancipa',
                category: 'Identidade visual',
                image: 'project-featured-image--emancipa',
                intro: 'Uma identidade visual pensada para fortalecer uma marca que fala com clareza, presença e sensibilidade.',
                challenge: 'Construir uma presença reconhecível, capaz de organizar diferentes pontos de contato sem perder proximidade.',
                direction: 'O projeto parte de uma linguagem direta e flexível, equilibrando estrutura, contraste e espaço para a mensagem.',
                colors: ['#c94b36', '#171717', '#e8e1d6', '#f0b44d']
            },
            'mostra-cenas-curtas': {
                title: 'Mostra de Cenas Curtas',
                category: 'Campanha cultural',
                image: 'project-featured-image--image5',
                intro: 'Uma campanha cultural construída para aproximar a cena contemporânea do público.',
                challenge: 'Criar uma comunicação viva para um programa formado por vozes, ritmos e propostas diferentes.',
                direction: 'A solução combina impacto gráfico, hierarquia tipográfica e uma composição aberta para cada edição.',
                colors: ['#171717', '#d9784f', '#e4c6a5', '#f2eee8']
            },
            obs: {
                title: 'OBS',
                category: 'Direção de arte',
                image: 'project-featured-image--image4',
                intro: 'Uma identidade cultural de alto contraste, feita para circular com presença e ritmo.',
                challenge: 'Dar unidade a um projeto que precisava funcionar em cartazes, redes e materiais de programação.',
                direction: 'A linguagem visual trabalha com cortes, campos de cor e uma tipografia que assume o primeiro plano.',
                colors: ['#203b85', '#f1c84c', '#171717', '#d9d4c8']
            },
            ferlete: {
                title: 'Ferlete',
                category: 'Estratégia de marca',
                image: 'project-featured-image--image3',
                intro: 'Uma marca vibrante, reconhecível e conectada ao universo da Ferlete.',
                challenge: 'Transformar personalidade e movimento em uma presença visual consistente.',
                direction: 'A identidade combina cor, gesto e contraste para criar uma marca que se destaca sem perder clareza.',
                colors: ['#c95b2b', '#eea735', '#171717', '#f0e4d5']
            },
            'cursinho-popular': {
                title: 'Cursinho Popular',
                category: 'Identidade visual',
                image: 'project-featured-image--image2',
                intro: 'Uma identidade visual construída para comunicar acesso, movimento e transformação.',
                challenge: 'Criar uma linguagem acolhedora, forte e simples de reconhecer em diferentes contextos.',
                direction: 'O sistema combina formas francas, escala tipográfica e uma paleta que aproxima sem infantilizar.',
                colors: ['#e8e1d6', '#171717', '#d4a24c', '#8796a1']
            },
            'instituto-bandeira-verde': {
                title: 'Instituto Bandeira Verde',
                category: 'Identidade visual',
                image: 'project-featured-image--bandeira-verde',
                intro: 'Uma identidade institucional, acolhedora e conectada ao território.',
                challenge: 'Equilibrar confiança, atuação pública e uma comunicação capaz de chegar a diferentes comunidades.',
                direction: 'A linguagem se organiza por formas sólidas, cor vegetal e uma estrutura que deixa o conteúdo respirar.',
                colors: ['#44521e', '#d7d7b9', '#171717', '#c4a354']
            },
            'parada-lgbtqia-aracatuba': {
                title: '2º Parada LGBTQIA+ de Araçatuba',
                category: 'Conteúdo e redes',
                image: 'project-featured-image--image7-3',
                intro: 'Uma comunicação visual para celebrar presença, diversidade e ocupação da cidade.',
                challenge: 'Criar uma campanha pública que fosse afirmativa, acessível e impossível de ignorar.',
                direction: 'O projeto articula cor, movimento e mensagens diretas para construir uma presença coletiva.',
                colors: ['#d84a4a', '#f2c84b', '#171717', '#e6d7c8']
            },
            associata: {
                title: 'Associata',
                category: 'Direção de arte',
                image: 'project-featured-image--image9',
                intro: 'Uma direção de arte que une energia cênica, cor e ritmo em uma presença visual marcante.',
                challenge: 'Dar forma a um projeto cultural com personalidade própria e capacidade de adaptação.',
                direction: 'A composição joga com escala, contraste e enquadramentos que deixam o sistema em movimento.',
                colors: ['#e45b36', '#5d2e48', '#171717', '#e6c1a9']
            },
            'festara-2022': {
                title: 'Festara 2022',
                category: 'Design editorial',
                image: 'project-featured-image--image14',
                intro: 'Um sistema editorial que organiza informação, identidade e atmosfera em uma linguagem cultural contemporânea.',
                challenge: 'Criar unidade para uma programação ampla sem apagar a singularidade de cada encontro.',
                direction: 'A solução trabalha com blocos, respiros e uma hierarquia editorial clara para orientar a leitura.',
                colors: ['#bf5d8d', '#f0c5cb', '#171717', '#e7dfd5']
            }
        };

        const project = projects[projectPage.dataset.project];

        if (project) {
            const projectShell = projectPage.querySelector('.project-shell');
            const placeholderMarkup = project.colors.map((color, index) => `<div class="case-study-placeholder case-study-placeholder--${index + 1}" style="--placeholder-color: ${color}"></div>`).join('');
            const secondaryPlaceholderMarkup = project.colors.slice(0, 3).map((color, index) => `<div class="case-study-placeholder case-study-placeholder--secondary-${index + 1}" style="--placeholder-color: ${color}"></div>`).join('');
            const finalPlaceholderMarkup = project.colors.slice(1).map((color, index) => `<div class="case-study-placeholder case-study-placeholder--final-${index + 1}" style="--placeholder-color: ${color}"></div>`).join('');

            projectShell.innerHTML = `
                <article class="case-study">
                    <header class="case-study-hero">
                        <div class="case-study-heading">
                            <p class="case-study-kicker">Projeto / ${project.category}</p>
                            <h1>${project.title}</h1>
                        </div>
                        <div class="case-study-meta">
                            <span>ACERVO ESTÚDIO</span>
                            <span>2026</span>
                        </div>
                    </header>

                    <div class="case-study-feature ${project.image}" role="img" aria-label="Imagem principal do projeto ${project.title}"></div>

                    <section class="case-study-intro">
                        <p class="case-study-label">01 / Visão geral</p>
                        <p class="case-study-lead">${project.intro}</p>
                    </section>

                    <section class="case-study-section">
                        <div class="case-study-section-heading">
                            <span>02</span>
                            <h2>O desafio</h2>
                        </div>
                        <div class="case-study-section-copy"><p>${project.challenge}</p></div>
                    </section>

                    <section class="case-study-placeholders">${placeholderMarkup}</section>

                    <section class="case-study-section case-study-section--solution">
                        <div class="case-study-section-heading">
                            <span>03</span>
                            <h2>A direção</h2>
                        </div>
                        <div class="case-study-section-copy"><p>${project.direction}</p></div>
                    </section>

                    <section class="case-study-section case-study-section--language">
                        <div class="case-study-section-heading">
                            <span>04</span>
                            <h2>A linguagem</h2>
                        </div>
                        <div class="case-study-section-copy"><p>Um sistema aberto, feito para receber novos conteúdos, escalas e aplicações sem perder sua identidade.</p></div>
                    </section>

                    <section class="case-study-placeholders case-study-placeholders--secondary">${secondaryPlaceholderMarkup}</section>

                    <section class="case-study-section">
                        <div class="case-study-section-heading">
                            <span>05</span>
                            <h2>Aplicações</h2>
                        </div>
                        <div class="case-study-section-copy"><p>Os elementos se reorganizam em diferentes formatos, criando uma experiência coerente e com espaço para surpresa.</p></div>
                    </section>

                    <section class="case-study-placeholders case-study-placeholders--final">${finalPlaceholderMarkup}</section>

                    <section class="case-study-section case-study-section--outcome">
                        <div class="case-study-section-heading">
                            <span>06</span>
                            <h2>Resultado</h2>
                        </div>
                        <div class="case-study-section-copy"><p>Uma direção visual em construção, preparada para ganhar imagens, textos e detalhes reais na próxima etapa.</p></div>
                    </section>

                    <section class="case-study-footer">
                        <span>Estudo de caso em construção</span>
                        <a href="portfolio.html">Voltar ao portfólio ↗</a>
                    </section>
                </article>
            `;
        }
    }

    const patchwork = document.querySelector('.patchwork');

    if (!patchwork) return;

    const patternClasses = [
        'p-dots',
        'p-checker',
        'p-circle',
        'p-diagonal',
        'p-cross',
        'p-rings',
        'p-half',
        'p-grid',
        'p-zigzag',
        'p-target',
        'p-stripes',
        'p-arch'
    ];

    const patchDurations = [300, 500, 800];

    const shuffle = (items) => {
        const shuffledItems = [...items];

        for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [shuffledItems[index], shuffledItems[randomIndex]] = [
                shuffledItems[randomIndex],
                shuffledItems[index]
            ];
        }

        return shuffledItems;
    };

    const schedulePatch = (patch, patchIndex) => {
        const duration = patchDurations[patchIndex % patchDurations.length];

        const changePatch = () => {
            const currentPattern = patternClasses.find((pattern) => patch.classList.contains(pattern));
            const availablePatterns = patternClasses.filter((pattern) => pattern !== currentPattern);
            const nextPattern = availablePatterns[Math.floor(Math.random() * availablePatterns.length)];

            patch.style.setProperty('--patch-duration', `${duration}ms`);
            patch.classList.add('is-changing');
            setTimeout(changePatch, duration);

            setTimeout(() => {
                patch.classList.remove(...patternClasses);
                patch.classList.add(nextPattern);

                if (['p-circle', 'p-cross', 'p-arch'].includes(nextPattern) && !patch.querySelector('span')) {
                    patch.appendChild(document.createElement('span'));
                }

                patch.classList.remove('is-changing');
            }, duration);
        };

        setTimeout(changePatch, Math.random() * duration);
    };

    [...patchwork.querySelectorAll('.patch')].forEach(schedulePatch);
});
