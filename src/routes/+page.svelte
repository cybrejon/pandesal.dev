<div class="h-svh p-6">
	<div class="relative h-full overflow-hidden rounded-3xl border border-foreground/15">
		<div class="absolute top-1/2 left-1/2 h-1 w-1">
			<div class="h-50 w-50 -translate-x-90 -translate-y-48 rounded-full bg-primary/50"></div>
		</div>
		<div class="h-full bg-card/20 p-7 backdrop-blur-[140px]">
			<div class="flex items-center justify-between pb-4">
				<div class="flex items-center gap-4">
					{#each ['bg-ctp-red-200', 'bg-accent', 'bg-ctp-blue-200'] as color}
						<div class={`h-5 w-5 rounded-full ${color}`}></div>
					{/each}
				</div>
				<p class="text-xl tracking-wider opacity-60">./pandev</p>
				<i></i>
			</div>
			<div class="flex h-full flex-col items-center justify-center">
				<img src="/images/logo.png" alt="pandesal.dev" />
				<div class="flex flex-col items-center gap-12 text-center">
					<h1
						class="max-w-[60rem] font-dela text-7xl leading-20 font-light tracking-wide text-pretty drop-shadow-[0_12px_var(--color-background)]"
					>
						A Comm<span class="text-secondary">unity</span> of
						<span class="text-accent">Filipino</span> Software Developers
					</h1>
					<p class="text-2xl drop-shadow-[0_12px_var(--color-background)]">
						Pandev is where the fun tech talks take place
					</p>
					<a
						class="flex items-center gap-3 rounded-full border-2 border-ctp-mauve-400 bg-linear-to-b from-ctp-mauve-800 via-ctp-mauve-800 to-ctp-mauve-950 px-7 py-4 drop-shadow-[0_12px_var(--color-background)] transition-all hover:-translate-y-1 active:translate-y-2 active:opacity-60 active:drop-shadow-none"
						href="/"
					>
						<span class="iconify text-[2.5rem] text-white mingcute--discord-fill"></span>
						<span class="text-2xl font-bold text-white">Join Discord</span></a
					>
				</div>
			</div>
		</div>
	</div>
</div>
