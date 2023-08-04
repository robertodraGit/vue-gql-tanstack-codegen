/**
 * this file exists to make sure TypeScript doesn't complain when trying to import *.vue files
 */
declare module "*.vue" {
    import { defineComponent } from "vue";
    const component: ReturnType<typeof defineComponent>;
    export default component;
}
