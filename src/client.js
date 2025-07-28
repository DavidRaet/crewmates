import { createClient } from '@supabase/supabase-js'

const URL = 'https://tqufbkvdsslphzrlqgmi.supabase.co';
const API_Key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdWZia3Zkc3NscGh6cmxxZ21pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTE0NDcsImV4cCI6MjA2ODg4NzQ0N30.D_BJp0EXLR5vxVnHtTgzXrzErtddkySIpoIuvhslwhM';
export const supabase = createClient(URL, API_Key);
