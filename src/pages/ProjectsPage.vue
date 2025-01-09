<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return { 
            store,
            gitHubProjects: [],
            currentPage: 1,
            perPage: 12, 
            totalPages: 0 
        };
    },
    computed: {},
    mounted() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios
                .get('https://api.github.com/user/repos', {
                    headers: {
                        'Authorization': `token ${store.gitHubToken}`,
                        'Accept': 'application/vnd.github.v3+json'
                    },
                    params: {
                        per_page: this.perPage,
                        page: this.currentPage
                    }
                })
                .then(response => {
                    this.gitHubProjects = response.data;

                    const linkHeader = response.headers.link;
                    if (linkHeader) {
                        const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
                        if (lastPageMatch) {
                            this.totalPages = parseInt(lastPageMatch[1]);
                        }
                    }

                    console.log(this.gitHubProjects);
                })
                .catch(error => {
                    console.error('Errore:', error);
                });
        },
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.getProjects();
            }
        },
        goToNextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.getProjects();
            }
        }
    }
};
</script>

<template>
    <div class="container">
        <h2 class="text-center text-white">
            Le repository del mio GitHub
        </h2>
        <div class="card-container d-flex justify-content-between align-items-center flex-wrap">
            <div v-for="(project, index) in gitHubProjects" :key="index" class="card rounded my-3 py-2 d-flex flex-column justify-content-between align-items-center flex-wrap">
                <p class="blue-text fw-bold fs-6 text-center">
                    {{ project.name }}
                </p>
                <p class="blue-text fs-6 text-center">
                    Creato il {{ new Date(project.created_at).toLocaleDateString() }}
                </p>
                <a :href="project.html_url" class="text-decoration-none fw-bold blue-text bordered p-1 rounded" target="_blank">
                    Vai alla repository
                </a>
            </div>
        </div>

        <div class="pagination-controls d-flex justify-content-center align-items-center mt-4">
            <button @click="goToPreviousPage" :disabled="currentPage === 1" class="text-decoration-none fw-bold blue-text bordered p-1 rounded">
                Indietro
            </button>
            <span class="text-white mx-3">Pagina {{ currentPage }} di {{ totalPages || '?' }}</span>
            <button @click="goToNextPage" :disabled="totalPages && currentPage === totalPages" class="text-decoration-none fw-bold blue-text bordered p-1 rounded">
                Avanti
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding-top: 100px;
}

.card {
    width: 200px;
    height: 200px;

    .blue-text {
        color: #01305f;
    }

    .bordered {
        border: 1px solid #01305f;
    }
}

.pagination-controls {
    .btn:disabled {
        opacity: 0.6;
        pointer-events: none;
    }
}
</style>
