<div class="p-2 sm:h-svh sm:p-6">
	<div class="relative h-full overflow-hidden rounded-3xl border border-foreground/15">
		<div class="absolute top-1/2 left-1/2 h-1 w-1">
			<div class="h-50 w-50 -translate-x-90 -translate-y-48 rounded-full bg-primary/50"></div>
		</div>
		<div class="@container h-full bg-card/20 p-4 backdrop-blur-[140px] md:p-7">
			<div class="relative flex items-center justify-between pb-4 @md:justify-center">
				<div class="flex items-center gap-2 @md:absolute @md:left-0 @md:gap-4">
					{#each ['bg-ctp-red-200', 'bg-accent', 'bg-ctp-blue-200'] as color (color)}
						<div class={`h-3 w-3 rounded-full @md:h-5 @md:w-5 ${color}`}></div>
					{/each}
				</div>
				<p class="text-xl tracking-wider opacity-60">./pandev</p>
			</div>
			<div class="flex h-full flex-col items-center justify-center py-6 sm:p-0">
				<img
					class="w-50 drop-shadow-[0_12px_var(--color-background)] md:w-auto"
					src="/images/logo.svg"
					alt="Pandev Community Logo - A Community of Filipino Software Developers"
				/>
				<div class="flex flex-col items-center gap-6 text-center md:gap-12">
					<div class="relative">
						<h1
							class="max-w-[60rem] font-dela text-3xl font-light tracking-wide text-pretty drop-shadow-[0_12px_var(--color-background)] md:text-5xl lg:text-7xl lg:leading-20"
						>
							A Comm<span class="text-secondary">unity</span> of
							<span class="text-accent">Filipino</span> Software Developers
						</h1>
						<div
							class="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex"
						>
							<div class="relative h-20 w-20 drop-shadow-[0_12px_var(--color-background)]">
								<img
									class="absolute -top-15 -left-60 -rotate-12 lg:-top-25 lg:-left-[400px]"
									src="images/ornaments/star2.svg"
									alt="ornament star"
								/>
								<img
									class="absolute -right-[250px] -bottom-15 rotate-6 lg:-right-[300px] lg:-bottom-20"
									src="images/ornaments/star1.svg"
									alt="ornament star"
								/>
								<img
									class="absolute -bottom-20 -left-60 lg:-bottom-45 lg:-left-65"
									src="images/ornaments/plane.svg"
									alt="ornament plane"
								/>
							</div>
						</div>
					</div>

					<p class="text-base drop-shadow-[0_12px_var(--color-background)] md:text-2xl">
						Pandev is where the fun tech talks take place
					</p>
					<a
						class="flex items-center gap-3 rounded-full border-2 border-ctp-mauve-400 bg-linear-to-b from-ctp-mauve-800 via-ctp-mauve-950 to-ctp-mauve-950 px-4 py-2 drop-shadow-[0_12px_var(--color-background)] transition-all hover:-translate-y-1 active:translate-y-2 active:opacity-60 active:drop-shadow-none md:px-6 md:py-2"
						href="https://discord.gg/pandesal-dev"
					>
						<span class="iconify text-2xl text-white mingcute--discord-fill md:text-[2.5rem]"
						></span>
						<span class="text-xl font-bold text-white md:text-2xl">Join Discord</span></a
					>
				</div>
			</div>
		</div>
	</div>
</div>
